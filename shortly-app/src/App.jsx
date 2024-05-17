import { Nav, Hero, LinkShorten, Statistics, Footer } from './components';

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <Hero />
      <div className="bg-neutral-200">
        <LinkShorten />
        <Statistics />
        <Footer />
      </div>
    </div>
  );
};

export default App;
