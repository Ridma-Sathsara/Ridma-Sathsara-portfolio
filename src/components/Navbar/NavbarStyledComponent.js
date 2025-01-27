import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for contrast */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;

  /* Add background on scroll */
  &.scrolled {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-10%)'};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;
