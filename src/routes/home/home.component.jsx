import { Outlet } from 'react-router-dom';

import Homepage from '../../components/homepage/homepage.component';

const Home = () => {
  return (
    <div>
      <Homepage />
      <Outlet />
    </div>
  );
};

export default Home;