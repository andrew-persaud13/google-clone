/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='flex flex-col items-center'>
            <img
              className='w-52 object-cover'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png'
              alt='google logo'
            />
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className='bg-red-400 rounded-lg p-4 mt-2 text-white hover:bg-red-500'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
