import { links } from '@/pages/api/data';
import React from 'react';

const Header = () => {
    const link = links.data;

    return (
        <header
            className='border-r-[3px] border-b-[3px] border-[#666666] h-fit min-w-max sticky top-0 left-0'
        >
            <nav className='flex flex-col items-start justify-center'>
                <h1
                    className='text-2xl font-medium p-[20px] border-b-[3px] border-[#666666] w-full'
                >Mathematical-pkg</h1>
                <ul className='list-none w-full max-h-screen overflow-hidden overflow-y-auto' >
                    {link.map(({ id, name, linkID }) => {
                        return (
                            <a
                                key={id}
                                href={linkID}
                                className='no-underline'
                            >
                                <li
                                    className='p-[30px] py-[10px] border-b-[3px] border-[#cccccc] font-medium 
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

export default Header;