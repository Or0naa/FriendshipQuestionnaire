import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className='p-4 w-full h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800'>
      <h1 className='text-2xl font-bold mb-6'>שאלון חברות</h1>
      <div className='flex flex-col space-y-4'>
        <Link href="/create" className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'>
          יצירת שאלון
        </Link>
        <button className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-300'>
          פתרון שאלון
        </button>
      </div>
    </div>
  );
}
