import { links } from '@/pages/api/data';
import Menu from '@/public/assets/icons/Menu';
import React, { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

interface HeaderType {
    mobile: boolean;
}

const Header = ({mobile}: HeaderType) => {
    const [open, setOpen] = useState(false);

    const link = links.data;

    function handleOpen(event: any) {
        event.preventDefault();
        setOpen(!open)
    }

    let isOpen = open ? 'inline' : 'hidden';

    return (
        <header
            className='h-fit min-w-max border-r-[3px] border-b-[3px] border-gray-100 sticky top-0 left-0
            bg-bgWHITE z-30'
        >
            <nav className='flex flex-col items-start justify-center'>
                <h1
                    className='text-2xl font-medium p-[20px] border-b-[3px] border-gray-100 w-full flex
                    items-center justify-between'
                >
                    Mathematical-pkg
                    <button className='block sm:hidden md:hidden' onClick={(event) => { handleOpen(event) }} >
                        <Menu />
                    </button>
                </h1>
                <ul
                    className={`list-none w-full max-h-screen overflow-hidden overflow-y-auto
                    xl:inline lg:inline ${useIsMobile(mobile, isOpen)}`}
                >
                    {link.map(({ id, name, linkID }) => {
                        return (
                            <a
                                key={id}
                                href={linkID}
                                className='no-underline'
                            >
                                <li
                                    className='p-[30px] py-[10px] border-b-[3px] border-gray-200 font-medium 
                                    hover:bg-grborder-gray-200 transition-colors'
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