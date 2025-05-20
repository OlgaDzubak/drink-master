import { NavItem, NavLink, NavList } from './FooterNavList.styled';

export const FooterNav = () => {

  return  <NavList>
            <NavItem><NavLink to="/" aria-label='go to the home page'>Home</NavLink></NavItem>
            <NavItem><NavLink to="/drinks" aria-label='go to the drinks page'>Drinks</NavLink></NavItem>
            <NavItem><NavLink to="/add" aria-label='go to the add-drinks page'>Add Drink</NavLink></NavItem>
            <NavItem><NavLink to="/my" aria-label='go to the own-drinks page'>My Drinks</NavLink></NavItem>
            <NavItem><NavLink to="/favorites" aria-label='go to the favorite-drinks page'>Favorites</NavLink></NavItem>
          </NavList>
};
