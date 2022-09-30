import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import NavItem from '../NavItem/NavItem';
import './Navbar.css';
import { ReactComponent as BellIcon } from '../../../../svg/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../../../svg/icons/messenger.svg';
import { ReactComponent as PlusIcon } from '../../../../svg/icons/plus.svg';
import { ReactComponent as CaretIcon } from '../../../../svg/icons/caret.svg';

// const NavItemsTitle = ["Applications", "Products", "Contact Us", "Others"];
const NavItemList = [
  <NavItem icon={<PlusIcon />} title="Application" />,
  <NavItem icon={<BellIcon />} title="Products" />,
  <NavItem icon={<MessengerIcon />} title="Contact Us" />,

  <NavItem icon={<CaretIcon />} title="Others">
    <DropdownMenu></DropdownMenu>
  </NavItem>,
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{NavItemList}</ul>
    </nav>
  );
};

export default Navbar;
