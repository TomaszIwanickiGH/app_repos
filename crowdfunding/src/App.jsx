import Navbar from './components/Navbar';
import Home from './components/Home';

import CardModal from './components/CardModal';
import CompletedModal from './components/CompletedModal';
import useCardModal from './hooks/useCardModal';

const App = () => {
  const cardModal = useCardModal();

  if (cardModal.isOpen) {
    document.body.classList.add('hidden-scroll');
  } else document.body.classList.remove('hidden-scroll');

  return (
    <div className="bg-neutral-100 relative">
      <Navbar />
      <div className="relative">
        <div className="absolute -top-20 w-full lg:px-0 md:px-20 px-8">
          <Home />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <CardModal />
        <CompletedModal />
      </div>
    </div>
  );
};

export default App;
