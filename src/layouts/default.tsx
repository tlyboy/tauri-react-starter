import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

function Default({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        {children}

        <div className="flex items-center gap-2 text-xl">
          <a
            className="i-carbon-logo-github icon-btn"
            href="https://github.com/tlyboy/react-starter"
            target="_blank"
            rel="noopener noreferrer"
          ></a>

          <ModeToggle />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Default
