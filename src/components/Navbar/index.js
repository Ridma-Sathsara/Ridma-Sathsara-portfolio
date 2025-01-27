import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItems,
  NavLink,
  GitHubButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { FaCode } from 'react-icons/fa';  // Changed to FaCode
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Change navbar background after scrolling 50px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      <NavbarContainer>
        <NavLogo to="/" onClick={scrollToTop}>
          <FaCode size="3rem" style={{ marginRight: '10px' }}  />  Ridma Sathsara  
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          {/* <NavLink href="#services">Services</NavLink> */}
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavItems>
        <GitHubButton href={Bio.github} target="_blank">
          GitHub Profile
        </GitHubButton>
        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>
            About
          </MobileLink>
          <MobileLink href="#services" onClick={() => setIsOpen(false)}>
            Services
          </MobileLink>
          <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </MobileLink>
          <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </MobileLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
