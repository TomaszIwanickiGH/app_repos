import Navbar from './components/Navbar';
import Home from './components/Home';
import JobDetails from './components/JobDetails';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
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
    </div>
  );
};

export default App;
