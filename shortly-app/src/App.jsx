import { Nav, Hero, LinkShorten, Statistics, Footer } from './components';

const App = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Hero />
      <LinkShorten />
      <Statistics />
      <Footer />
    </div>
  );
};

export default App;
