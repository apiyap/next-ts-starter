import '../styles/app.scss'
import '../styles/globals.css'
import { Configuration } from 'react-md'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import store from '../app/store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Configuration>
        <Component {...pageProps} />
      </Configuration>
    </Provider>
  )
}

export default MyApp
