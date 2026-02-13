import styled from "styled-components";
import { H2, P } from "../styles/typographies";
import FadeInSection from "./FadeInSection";

const SectionContainer = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 80px;
  text-align: left;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const StepCard = styled.div`
  background: transparent;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-5px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--color-accent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StepNumber = styled.span`
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.05);
  position: absolute;
  top: 10px;
  right: 20px;
  line-height: 1;
`;

const StepTitle = styled(H2)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  position: relative;
  z-index: 1;
`;

const StepDescription = styled(P)`
  color: var(--color-text-secondary);
  font-size: 1rem;
  position: relative;
  z-index: 1;
`;

const Methodology = () => {
  return (
    <SectionContainer>
      <FadeInSection>
        <SectionHeader>
          <H2>Como eu trabalho</H2>
        </SectionHeader>
        <StepsContainer>
          <StepCard>
            <StepNumber>01</StepNumber>
            <StepTitle>Diagnóstico orientado a dados</StepTitle>
            <StepDescription>
              Mapeamento profundo do seu processo atual para identificar onde você está perdendo dinheiro e tempo. Não há "achismos", apenas análise de fluxo real.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepNumber>02</StepNumber>
            <StepTitle>Análise de impacto financeiro</StepTitle>
            <StepDescription>
              Projeta-se o retorno sobre o investimento antes de escrever uma linha de código. Priorizamos as soluções que trazem maior retorno financeiro imediato.
            </StepDescription>
          </StepCard>

          <StepCard>
            <StepNumber>03</StepNumber>
            <StepTitle>Implementação inteligente</StepTitle>
            <StepDescription>
              Desenvolvimento de sistemas personalizados que automatizam o manual, integram o desconectado e geram previsibilidade para o seu crescimento.
            </StepDescription>
          </StepCard>
        </StepsContainer>
      </FadeInSection>
    </SectionContainer>
  );
};

export default Methodology;
