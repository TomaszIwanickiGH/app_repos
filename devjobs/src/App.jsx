import Navbar from './components/Navbar';
import Home from './components/Home';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import FilterModal from './components/FilterModal';
import useFilterModal from './hooks/useFilterModal';

const App = () => {
  const theme = useTheme();

  if (theme.mode === 'dark') {
    document.body.classList.add('darkMode');
  } else {
    document.body.classList.remove('darkMode');
  }

  const location = useLocation();
  const { pathname } = location;

  const filterModal = useFilterModal();

  if (filterModal.isOpen) {
    document.body.classList.add('hidden-scroll');
  } else document.body.classList.remove('hidden-scroll');

  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-50">
        <FilterModal mode={theme.mode} />
      </div>
      <Navbar />
      <div className="relative">
        <div className="absolute xl:-top-12 lg:-top-4 -top-12 w-full lg:px-40 md:px-20 px-8">
          <SearchBar mode={theme.mode} />
        </div>
      </div>
      <div className="w-full lg:px-40 md:px-20 px-8 mt-24">
        <Routes>
          <Route
            path="/"
            element={<Home mode={theme.mode} />}
          />
          <Route
            path="/details/:id"
            element={<JobDetails mode={theme.mode} />}
          />
        </Routes>
      </div>
      {pathname.includes('/details') && <Footer mode={theme.mode} />}
    </div>
  );
};

export default App;
