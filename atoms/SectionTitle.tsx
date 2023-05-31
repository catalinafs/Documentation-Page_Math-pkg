import React from 'react';

type Props = {
    text: string
}

const SectionTitle = ({ text }: Props) => {
    return (
        <h2 className='text-2xl font-medium border-b-[3px] border-[#666666] px-[15px] py-[10px]'>{text}</h2>
    );
}

export default SectionTitle;
