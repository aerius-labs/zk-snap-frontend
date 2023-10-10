import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header';
export default function App({ Component, pageProps }: AppProps) { 
  return (
    <div className='bg-black'>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
