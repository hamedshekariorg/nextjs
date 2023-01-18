import { SettingProvider } from '@/contexts'
import { store } from '@/redux/store'
import type { AppProps } from 'next/app'
import {Provider as ReduxProvider} from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <SettingProvider>
      <Component {...pageProps} />
      </SettingProvider>
    </ReduxProvider>
  )
}
