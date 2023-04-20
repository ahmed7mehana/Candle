import Footer from '@/Components/Footer'
import Navba from '@/Components/Nav'
import '@/styles/globals.css'
import { ThemeProvider} from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navba/>
    <ThemeProvider attribute='class' defaultTheme='light'>
    <Component {...pageProps} />
    </ThemeProvider>
<Footer/>
    
    </>
  )
}
