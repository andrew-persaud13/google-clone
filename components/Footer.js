import React from 'react';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] pb-2 whitespace-nowrap text-sm text-gray-600'>
      <p>Copyright &copy; {new Date().getFullYear()} Bearcave</p>
    </footer>
  );
}
