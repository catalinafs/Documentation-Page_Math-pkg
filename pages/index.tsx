import Header from '@/components/Header';
import Info from '@/components/Info';

export default function Home() {
  return (
    <main className='min-h-screen w-full flex sm:flex-row md:flex-row flex-col text-lg'>
      <Header />
      <Info />
    </main>
  );
}
