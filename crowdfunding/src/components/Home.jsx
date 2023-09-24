import Header from '../components/Header';
import Info from '../components/Info';
import About from '../components/About';

const Home = () => {
  return (
    <div className="lg:w-1/2 w-full mx-auto flex flex-col gap-8 rounded-lg mb-12">
      <Header />
      <Info />
      <About />
    </div>
  );
};

export default Home;
