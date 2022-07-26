import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
