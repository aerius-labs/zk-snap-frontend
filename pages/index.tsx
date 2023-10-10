import { Inter } from 'next/font/google'
import CommunityBlock from '@/components/CommunityBlock';
import HomePageBar from '@/components/HomePageBar';
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
      className={`min-h-screen items-center justify-center py-12 ${inter.className}`}
    >
      <HomePageBar />
      <div className='flex z-10 gap-8 flex-wrap justify-center items-center'>
        {
          list.map((listItem) => (
            <CommunityBlock key={listItem.name} community={listItem}/>
          ))
        }
      </div>
    </main>
  )
}
