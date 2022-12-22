import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';


const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            {/* <CrwnLogo className='logo' /> */}
            Logo Top Clusters
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/'>
              Product
            </Link>
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;