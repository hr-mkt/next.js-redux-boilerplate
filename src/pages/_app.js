import { Provider } from 'react-redux'
import {configureStore, preloadedState} from '../store/configureStore'
const store = configureStore(preloadedState)

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
