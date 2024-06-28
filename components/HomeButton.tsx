import { useRouter } from 'next/navigation';

const HomeButton = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white px-1 rounded" onClick={goToHome}>Home</button>
  );
};

export default HomeButton;