import '@/styles/globals.css'

/**
 * Importo para usar la autenticación.
 */
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import { SessionProvider } from 'next-auth/react';

export default function App({ session, Component, pageProps }) {
  
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
  
}
