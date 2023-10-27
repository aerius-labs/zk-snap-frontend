import { Inter } from 'next/font/google'
import CommunityBlock from '@/components/CommunityBlock';
import HomePageBar from '@/components/HomePageBar';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home({daos}:any) {
  return (
    <main
      className={`min-h-screen items-center justify-center py-12 ${inter.className}`}
    >
      <HomePageBar />
      <div className='flex z-10 gap-8 flex-wrap justify-center items-center'>
        {
          daos.map((listItem: any, idx: number) => (
            <Link key={idx} href={`/community/${listItem.id}`}>
              <CommunityBlock key={listItem._id} community={listItem}/>
            </Link>
          ))
        }
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3001/api/getAllDaos');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const daos = await response.json();
    return {
      props: {
        daos
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}