import { Inter } from 'next/font/google'
import { useState, useRef, useEffect } from 'react';
import CommunityBlock from '@/components/CommunityBlock';
import Dropdown from '@/components/DropDown';
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
      <div className='flex mb-4 flex-row flex-wrap px-20 gap-4'>
        <div className='flex gap-3 text-xs'>
          <p className='text-gray-100 ring-1 ring-custom-purple border py-2 px-4 rounded-2xl'>COMMUNITIES 29.5K</p>
          <p className='text-gray-100 ring-1 ring-custom-purple border py-2 px-4 rounded-2xl'>PROPOSALS 119.5K</p>
        </div>
        <div className='ml-auto flex gap-3 text-xs'>
          <Dropdown/>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M22.333 21.0579C23.425 19.8537 24.0903 18.2555 24.0903 16.5019C24.0903 12.7549 21.0527 9.71732 17.3056 9.71732C13.5586 9.71732 10.521 12.7549 10.521 16.5019C10.521 20.249 13.5586 23.2866 17.3056 23.2866C19.2991 23.2866 21.0918 22.4268 22.333 21.0579ZM22.333 21.0579L25.871 24.4624" stroke="#A55FFD" strokeWidth="2" strokeLinecap="round"/>
              <rect x="1.90186" y="1.06693" width="32" height="32" rx="16" stroke="#9455E4" strokeWidth="2"/>
            </svg>
          </span>
        </div>
      </div>
      <hr className='mb-6 border-custom-purple mx-20'/>
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
