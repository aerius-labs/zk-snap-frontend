import { Inter } from 'next/font/google'
import CommunityBlock from '@/components/CommunityBlock';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const list = [
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    }
  ];
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className='flex gap-8 flex-wrap justify-center items-center'>
        {list.map((listItem) => (
          <CommunityBlock community={listItem}/>
        ))}
      </div>
    </main>
  )
}
