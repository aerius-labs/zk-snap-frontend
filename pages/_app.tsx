import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const ProofGenerator = dynamic(() => import('../components/ProofGenerator'), {
  ssr: false,  // This ensures the component is loaded only on the client side
  loading: () => <p>Loading...</p>,  // Optional loading component
});
export default function App({ Component, pageProps }: AppProps) { 
  return (
    <div className='bg-black'>
      <Header/>
      <Component {...pageProps} />
      {/* <ProofGenerator /> */}
    </div>
  )
}
