import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo href="#">João Soares</Logo>
        <Nav>
          <NavItem href="#projects">Projetos</NavItem>
          <NavItem href="#about">Sobre mim</NavItem>
          <NavItem href="#contact">Contato</NavItem>
        </Nav>
        <SocialIcons>
          <IconLink
            href="https://github.com/Jmkoygg"
            target="_blank"
            aria-label="GitHub"
          >
            <img src="./github.svg" alt="github" width={20} height={20} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/joãosoaresdev/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src="./linkedin.svg" alt="Linkedin" width={20} height={20} />
          </IconLink>
        </SocialIcons>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 22, 36, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.a`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--color-accent);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-accent);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
  
  img {
    filter: invert(1);
  }
`;

export default Header;
