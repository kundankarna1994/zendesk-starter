import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming'
import { lazy, Suspense } from 'react'

import { useLocation } from '@/hooks/useClient'
import { TranslationProvider } from '@/providers/TranslationProvider'

const Modal = lazy(() => import('@/locations/Modal'))
const TicketSideBar = lazy(() => import('@/locations/TicketSideBar'))

const LOCATIONS = {
  ticket_sidebar: TicketSideBar,
  modal: Modal,
  default: () => null,
}

function App() {
  const location = useLocation()
  const Location = LOCATIONS[location as keyof typeof LOCATIONS] || LOCATIONS.default

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME }}>
      <TranslationProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Location />
        </Suspense>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default App
