import * as React from 'react';

const Menu = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={30}
        height={30}
        fill='#000'
        viewBox='0 0 72 72'
        {...props}
    >
        <path
            fill={props.fill}
            d='M56 48a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40zm0-16a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40zm0-16a4 4 0 0 1 0 8H16a4 4 0 0 1 0-8h40z'
        />
    </svg>
)

export default Menu;
