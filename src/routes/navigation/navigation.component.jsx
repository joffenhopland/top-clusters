import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

// const dashboardLink = () => {
//   const host = window.location.hostname;
//   const hostParts = host.split(".");
//   const isLocalHost = hostParts.slice(-1)[0] === "localhost";
//   if (isLocalHost) {
//     return "http://app.localhost:3001/"
//   } else {
//     return "http://app.topclusters.io/"

//   }
// }

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
            <a href="http://app.localhost:3000/" >Sign In Page</a>

              {/* SIGN IN
            </Link> */}
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;