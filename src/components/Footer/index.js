import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Email } from '@mui/icons-material';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 1;
  display: flex;
  justify-content: center;
  background: linear-gradient(100.26deg, rgba(7, 48, 88, 0.06) 42.33%, rgba(0, 19, 225, 0.05) 127.07%);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 25px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const EmailSection = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ridma Sathsara</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          {/* <NavLink href="#experience">Experience</NavLink> */}
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><FaLinkedin /></SocialMediaIcon>
          {/* <SocialMediaIcon href={Bio.behance} target="display"><FaBehance /></SocialMediaIcon> */}
          <SocialMediaIcon href={Bio.facebook} target="display"><FaFacebook /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><FaTwitter /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><FaInstagram /></SocialMediaIcon>
        </SocialMediaIcons>
        
        {/* Email Section */}
        <EmailSection>
          <Email fontSize="large" />
          <span>ridmasathsara25@gmail.com</span>
        </EmailSection>

        <Copyright>
          &copy; 2024 Ridma Sathsara. All rights Reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
