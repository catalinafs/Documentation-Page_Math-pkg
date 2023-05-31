import React, { useState } from 'react';
import { links } from '@/pages/api/data';
import Menu from '@/public/assets/icons/Menu';

const HeaderMobile = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  let isMenuToggle = menuToggle ? 'transition-all delay-[1s] ease-in-out' : 'hidden transition-all delay-[1s] ease-in-out'
  const link = links.data;

  return (
    <header
      className='bg-bgWHITE w-full sticky top-0 left-0 overflow-hidden max-h-screen overflow-y-auto z-50'
    >
      <nav className='flex flex-col overflow-y-auto'>
        <div className='flex justify-evenly items-center fixed top-0 left-0 min-h-[60px] bg-[#cccccc] w-full'>
          <h1 className='text-xl font-medium p-[20px] w-full'
          >Mathematical-pkg</h1>
          <button className='my-5 mx-4 cursor-pointer' onClick={() => {setMenuToggle(!menuToggle)}}>
            <Menu className='' />
          </button>
        </div>

        <ul
          className={`list-none mt-[85px] ${isMenuToggle}`}
        >
          {/* <ul
          className='list-none w-full max-h-screen overflow-hidden overflow-y-auto bg-[#617794] py-[120px]
          flex flex-col justify-center'
        > */}
          {link.map(({ id, name, linkID }) => {
            return (
              <a
                key={id}
                href={linkID}
                className='no-underline'
              >
                <li
                  className='pl-[65px] py-[10px] border-b-[3px] border-[#cccccc] font-medium 
                  hover:bg-[#ccc] transition-colors'
                >
                  {name}
                </li>
              </a>
            )
          })}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMobile;
