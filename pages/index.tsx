import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import HomePageBar from '@/components/HomePageBar';
import Link from 'next/link';
import CommunityBlock from '@/components/CommunityBlock';
import { Community } from '@/interfaces';

export default function Home({daos}:{daos: Community[]}) {
  return (
    <main
      className={`min-h-screen items-center justify-center py-12 ${inter.className}`}
    >
      <HomePageBar />
      <div className='flex z-10 gap-16 p-16 flex-wrap justify-center items-center'>
        {
          daos.map((listItem: Community, idx: number) => (
            <Link key={idx} href={`/community/${listItem.id}`}>
              <CommunityBlock key={listItem.id} community={listItem}/>
            </Link>
          ))
        }
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.FRONTENDURL}/api/getAllDaos`);
  const daos = await response.json();
  return {
    props: {
      daos
    }
  };
}