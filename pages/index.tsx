import Header from '@/components/Header';
import HeaderMobile from '@/components/HeaderMobile';
import Info from '@/components/Info';
import { useEffect, useState } from 'react';

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

  let isMobile = mobile ? <HeaderMobile /> : <Header />;
  let isMobileMd = !mobile ? 'md:py-[30px] md:px-[50px]' : 'relative top-[70px]'

  return (
    <main className='min-h-screen w-full flex sm:flex-row md:flex-row flex-col text-lg'>
      {isMobile}
      <Info isMobileMd={isMobileMd} />
    </main>
  );
}

// import { links } from '@/pages/api/data';
// import React from 'react';

// const Header = () => {
//     const link = links.data;

//     return (
//         <header
//             className='border-r-[3px] border-b-[3px] border-[#666666] h-fit min-w-max'
//         >
//             <nav className='flex flex-col items-start justify-center'>
//                 <h1
//                     className='text-2xl font-medium p-[20px] border-b-[3px] border-[#666666] w-full'
//                 >Mathematical-pkg</h1>
//                 <ul className='list-none w-full max-h-screen overflow-hidden overflow-y-auto' >
//                     {link.map(({ id, name, linkID }) => {
//                         return (
//                             <a
//                                 key={id}
//                                 href={linkID}
//                                 className='no-underline'
//                             >
//                                 <li
//                                     className='p-[30px] py-[10px] border-b-[3px] border-[#cccccc] font-medium 
//                                     hover:bg-[#ccc] transition-colors'
//                                 >
//                                     {name}
//                                 </li>
//                             </a>
//                         )
//                     })}
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;