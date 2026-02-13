import { StyledButton } from "./Button";
import { H1, P, Span } from "../styles/typographies";
import styled from "styled-components";

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
`;

const AccentText = styled(Span)`
  color: var(--color-accent);
  font-family: var(--font-body);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  display: block;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
`;

const Headline = styled(H1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  max-width: 900px;
`;

const SubHeadline = styled(P)`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  max-width: 700px;
  margin-bottom: 3rem;
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
`;

const Introduction = () => {
  return (
    <HeroSection>
      <AccentText>João Soares • Estrategista em Automação</AccentText>
      <Headline>
        Transformo processos comerciais em sistemas inteligentes que geram crescimento previsível.
      </Headline>
      <SubHeadline>
        Diagnóstico estratégico, identificação de gargalos e implementação de soluções personalizadas orientadas a impacto financeiro.
      </SubHeadline>
      <ButtonContainer>
        <a href="#projects" style={{ textDecoration: 'none' }}>
          <StyledButton>Veja meus projetos</StyledButton>
        </a>
      </ButtonContainer>
    </HeroSection>
  );
};

export default Introduction;
