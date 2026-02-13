import { H2, P } from "../styles/typographies";
import styled from "styled-components";
import { StyledButton } from "./Button";

const FooterContainer = styled.footer`
  margin-top: 100px;
  padding: 80px 0 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
`;

const CTASection = styled.div`
  max-width: 800px;
  margin: 0 auto 80px;
  padding: 0 20px;
`;

const CTAHeadline = styled(H2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const CTASubtext = styled(P)`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 40px;
`;

const SocialIcon = styled.a`
  opacity: 0.7;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }

  img {
    filter: invert(1);
  }
`;

const Copyright = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <CTASection>
        <CTAHeadline>
          Se seu processo comercial depende de esforço manual, existe oportunidade escondida aí.
        </CTAHeadline>
        <CTASubtext>
          Vamos conversar sobre como automatizar seu crescimento e recuperar receita deixada na mesa.
        </CTASubtext>
        <a href="https://wa.me/5588996204635" target="_blank" style={{ textDecoration: 'none' }}>
          <StyledButton>Entre em contato comigo</StyledButton>
        </a>
      </CTASection>

      <SocialLinks>
        <SocialIcon href="https://www.linkedin.com/in/joãosoaresdev/" target="_blank" aria-label="LinkedIn">
            <img src="./linkedin.svg" alt="Linkedin" width={30} height={30}/>
        </SocialIcon>
        <SocialIcon href="https://github.com/Jmkoygg" target="_blank" aria-label="GitHub">
            <img src="./github.svg" alt="github" width={30} height={30} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/joao.soareess/" target="_blank" aria-label="Instagram">
            <img src="./insta.png" alt="insta" width={30} height={30} />
        </SocialIcon>
      </SocialLinks>

      <Copyright>
        © {new Date().getFullYear()} João Soares. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
