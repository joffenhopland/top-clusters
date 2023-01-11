import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component'

import {ReactComponent as Logo} from '../../assets/logos/top-clusters-logo-text-lower-v02.svg'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  LogInLink,
  LogOutLink,
  Divider
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
            <Logo className='logo'  height={100} width={275}/>
            {/* Logo Top Clusters */}
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
              <Divider>
              |
              </Divider>
            {currentUser ? (
              <LogOutLink onClick={signOutUser}>
              SIGN OUT
            </LogOutLink>
            ) : (
              // <a href="http://app.localhost:3000/" >Sign In</a>
              <LogInLink href="https://app.topclusters.io/" >Log In</LogInLink>

            )}
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>Sign Up</Button>
        </NavLinks>
          </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };
  
  export default Navigation;