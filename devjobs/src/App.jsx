import Navbar from './components/Navbar';
import Home from './components/Home';
import JobDetails from './components/JobDetails';

import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Navbar />
      <div className="relative border-[20px] border-lime-500">
        <div className="absolute xl:-top-12 lg:-top-4 -top-12 w-full lg:px-40 md:px-20 px-8">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/details/:id"
              element={<JobDetails />}
            />
          </Routes>
        </div>
      </div>
      {/* {location.pathname.includes('/details') && <div className="">sdsdddddddd</div>} */}
    </div>
  );
};

export default App;
