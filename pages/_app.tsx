import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='bg-black'>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp);