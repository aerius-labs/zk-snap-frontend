import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store';
import Header from '@/components/Header';
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='bg-black'>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp);