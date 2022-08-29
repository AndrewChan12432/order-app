import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../comps/Layout'
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../comps/ProtectedRoute'

const noAuthRequired = ['/', '/login', '/signup', '/aboutus' ]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (   
    <AuthContextProvider>
      <Layout>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
      </Layout>
    </AuthContextProvider> 
  )
}

export default MyApp
