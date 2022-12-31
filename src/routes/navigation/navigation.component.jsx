import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase.utils';
import Button from '../../components/button/button.component'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  LogInLink,
  LogOutLink
} from './navigation.styles';

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
  const { currentUser } = useContext(UserContext);

  // TODO: Add anchor links

    return (
      <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
            {/* <CrwnLogo className='logo' /> */}
            Logo Top Clusters
            </LogoContainer>
            <NavLinks>

            <NavLink to='/'>
              Home
              </NavLink>
              <NavLink to='/'>
              Product
              </NavLink>
              <NavLink to='/'>
              How It Works
              </NavLink>
              <NavLink to='/'>
              Pricing
              </NavLink>
              <NavLink to='/'>
              FAQ
              </NavLink>
            {currentUser ? (
              <LogOutLink onClick={signOutUser}>
              SIGN OUT
            </LogOutLink>
            ) : (
              // <a href="http://app.localhost:3000/" >Sign In</a>
              <LogInLink href="https://app.topclusters.io/" >Log In</LogInLink>

            )}
            <Button>Sign Up</Button>
        </NavLinks>
          </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;