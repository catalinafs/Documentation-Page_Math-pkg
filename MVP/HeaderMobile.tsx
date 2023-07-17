// const [sizeDisplay, setSizeDisplay] = useState({ width: 0, height: 0 });

// useEffect(() => {
//     function handleResize() {
//         setSizeDisplay({ width: window.innerWidth, height: window.innerHeight });
//     }

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
// }, []);

// return (
//     <div>
//         {sizeDisplay.width > 900 ? <Nav /> : sizeDisplay.width > 700 ? <Boton buttonText='botoncito' /> : <h1>hola</h1>}
//     </div>
// )

// const [widthTitle, setWidthTitle] = useState('lg:w-[702px]')

// useEffect(() => {
//     function handleResize() {
//         if (window.innerWidth >= 976 && window.innerWidth <= 1650) {
//             setWidthTitle('lg:w-[500px]')
//         } else {
//             setWidthTitle('lg:w-[702px]')
//         }
//     }
//     handleResize()
//     window.addEventListener('resize', handleResize)
//     return () => {
//         window.removeEventListener('resize', handleResize)
//     }
// }, [])