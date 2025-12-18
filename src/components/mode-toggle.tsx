import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  function toggleDark(event: React.MouseEvent<HTMLButtonElement>) {
    const isAppearanceTransition = !window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const newTheme = theme === 'dark' ? 'light' : 'dark'

    if (
      !isAppearanceTransition ||
      typeof document.startViewTransition !== 'function'
    ) {
      setTheme(newTheme)
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    const transition = document.startViewTransition(() => {
      setTheme(newTheme)
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: newTheme === 'dark' ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards',
          pseudoElement:
            newTheme === 'dark'
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
        },
      )
    })
  }

  return (
    <button
      className="icon-btn i-carbon-sun dark:i-carbon-moon"
      title="切换深色模式"
      onClick={toggleDark}
    ></button>
  )
}
