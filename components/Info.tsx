import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const Info = () => {
    return (
        <aside className='max-w-[68rem] p-[30px] sm:p-[50px] z-10'>
            <section id='Introduction' className='mb-14'>
                <SectionTitle text='Introduction' />

                <article className='text-base px-[20px] pt-[15px] flex flex-col gap-4'>
                    <p>
                        Mathematical-pkg is a basic math library that manage basic operations like, addition, subtraction, division, multiplication, volume, area and perimeter formulas, and the general formula.
                    </p>
                </article>
            </section>
            <section id='Features' className='mb-14'>
                <SectionTitle text='Features' />

                <article className='text-base px-[20px] pt-[15px] flex flex-col gap-4'>
                    <ul className='list-disc ml-[20px]'>
                        <li>Contains differente types of math operations.</li>
                        <li>Runs on any JavaScript engine.</li>
                        <li>Open source.</li>
                    </ul>
                </article>
            </section>
            <section id='SupportedOperations' className='mb-14' >
                <SectionTitle text='Supported Operations' />

                <article className='text-base px-[20px] py-[15px] flex flex-col gap-4'>
                    <ul className='list-disc ml-[20px]'>
                        <li>Addition</li>
                        <li>Subtraction</li>
                        <li>Division</li>
                        <li>Multiplication</li>
                        <li>General Formula</li>
                        <li>Area of a Triangle</li>
                        <li>Area of a Square</li>
                        <li>Cubic Volume</li>
                        <li>Cuboid Volume</li>
                        <li>Perimeter of a Parallelogram</li>
                        <li>Perimeter of a Trapezoid</li>
                    </ul>
                </article>
            </section>
            <section id='Usage' className='mb-14' >
                <SectionTitle text='Usage' />

                <article className='text-base px-[20px] py-[15px] flex flex-col gap-4'>
                    <p>
                        Mathematical-pkg can be used in the browser.
                        <br />
                        <br />
                        Install mathematical-pkg using <a href='https://www.npmjs.com/package/mathematical-pkg'>npm</a>:
                        <br />
                    </p>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        npm install mathematical-pkg
                    </code>
                </article>
            </section>
            <section id='ExampleofUsage' className='mb-14' >
                <SectionTitle text='Example of Usage' />

                <article className='text-base sm:px-[20px] sm:py-[20px] p-[10px] flex flex-col gap-4'>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        {`// basic operations
                        <br />
                        sum(2, 2);                      // 4
                        <br />
                        rest(5, 3);                     // 2
                        <br />
                        divide(12,2);                   // 6
                        <br />
                        multiply(4,5);                  // 20
                        <br />
                        <br />
                        // GeneralOperation
                        <br />
                        GeneralOperation(6,-19,7);      // [ -0.4256296675458497, -2.741036999120817 ]
                        <br />
                        <br />
                        // Areas
                        <br />
                        triangleArea(3, 4);             // 6
                        <br />
                        squareArea(2, 2);               // 4
                        <br />
                        <br />
                        // Volumes
                        <br />
                        cubicVolume(3);                 // 27
                        <br />
                        cuboidVolume(10, 4, 5);         // 220
                        <br />
                        <br />
                        // Perimeters
                        <br />
                        parallelogramPerimeter(8, 7);   // 30
                        <br />
                        trapezoidPerimeter(5, 6, 5, 8); // 24`}
                    </code>
                </article>
            </section>

            <section id='BrowserSupport' className='mb-14'>
                <SectionTitle text='Browser Support' />

                <article className='text-base px-[20px] pt-[15px] flex flex-col gap-4'>
                    <p>
                        Mathematical-pkg works on any ES6 compatible JavaScript engine, Chrome, Firefox, Safari, and Edge.
                    </p>
                </article>
            </section>

            <section id='Build' className='mb-14' >
                <SectionTitle text='Build' />

                <article className='text-base px-[20px] py-[15px] flex flex-col gap-4'>
                    <p>
                        First clone the project from github:
                    </p>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        npm install mathematical-pkg
                    </code>
                    <p>
                        Install the project dependencies:
                    </p>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        npm install or npm i
                    </code>
                </article>
            </section>

            <section id='Develop' className='mb-14'>
                <SectionTitle text='Develop' />

                <article className='text-base px-[20px] pt-[15px] flex flex-col gap-4'>
                    <p>
                        When developing new features for mathematical-pkg, it is good to be aware of the following background information.
                    </p>
                </article>
            </section>

            <section id='Code' className='mb-14'>
                <SectionTitle text='Code' />

                <article className='text-base px-[20px] pt-[15px] flex flex-col gap-4'>
                    <p>
                        The code of <span className='font-medium'>mathematical-pkg</span> is written in ES modules, and requires all files to have a real, relative path, meaning the files must have a <span className='font-medium'>*.js</span> extension.
                    </p>
                    <p>
                        Please configure adding file extensions on auto import in your IDE.
                    </p>
                </article>
            </section>

            <section id='Test' className='mb-14' >
                <SectionTitle text='Test' />

                <article className='text-base px-[20px] py-[15px] flex flex-col gap-4'>
                    <p>
                        To execute tests for the library, install the project dependencies once:
                    </p>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        npm install
                    </code>
                    <p>
                        Then, the tests can be executed:
                    </p>
                    <code className='whitespace-pre leading-loose bg-codeBG p-[20px] m-[10px] rounded-R12 overflow-auto'>
                        npm test
                    </code>
                </article>
            </section>

            <p>Have some fun with the package!!!</p>
            <span className='text-green font-bold'>Happy Hacking!</span>

            <section className='mt-8'>
                <p className='text-sm text-gray-300'>
                    All rights reserved @ 2022 <strong>Catalina<span className='text-transparent-green font-bold'>Developer</span></strong>
                </p>
            </section>  
        </aside>
    );
}

export default Info;