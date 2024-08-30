import dynamic from 'next/dynamic';

const LazyComponent = dynamic(() => import('../components/LazyLoadedComponent'));

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <LazyComponent />
    </div>
  );
};

export default HomePage;