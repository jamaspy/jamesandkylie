import '../styles/globals.css'
import { ConfettiContextProvider } from '../components/Confetti/ConfettiContext'
function MyApp({ Component, pageProps }) {
  return(
      <ConfettiContextProvider>
        <Component {...pageProps} />
      </ConfettiContextProvider>
      )
}

export default MyApp
