import { Inter } from 'next/font/google'
import CommunityBlock from '@/components/CommunityBlock';
import HomePageBar from '@/components/HomePageBar';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const list = [
    {
      id: '1',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'2',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'3',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'4',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'5',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'6',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'7',
      logo: '/Logo.png',
      name:'AAVE',
      members: '127.3K MEMBERS',
      link: '/aave'
    },
    {
      id:'8',
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
          list.map((listItem, idx) => (
            <Link key={idx} href={`/community/${listItem.id}`}>
              <CommunityBlock key={listItem.name} community={listItem}/>
            </Link>
          ))
        }
      </div>
    </main>
  )
}
