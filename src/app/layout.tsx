import type { Metadata } from 'next'
import { jetbrain } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import ThemeProvider from '@/components/theme-provider'
import Header from '@/components/headers/header'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("--font-jetbrain", jetbrain.variable)}>
        <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
          <div className="relative flex flex-col min-h-screen w-full">
            <Header />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
