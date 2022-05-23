import '../styles/global.scss'
import 'bootswatch/dist/zephyr/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.min.js')
  }, [])

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
