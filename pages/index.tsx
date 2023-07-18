import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Info from '@/components/Info';


export default function Home() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <main className='min-h-screen w-full flex sm:flex-row md:flex-row flex-col text-lg'>
      <Header mobile={mobile} />
      <Info />
    </main>
  );
}
