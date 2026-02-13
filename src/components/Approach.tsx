import styled from "styled-components";
import { H2, P } from "../styles/typographies";
import FadeInSection from "./FadeInSection";

const SectionContainer = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const HeaderContainer = styled.div`
  max-width: 700px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ItemTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-text);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "•";
    color: var(--color-accent);
    font-size: 2rem;
    line-height: 0;
  }
`;

const ItemText = styled(P)`
  margin: 0;
  font-size: 1rem;
  max-width: 90%;
`;

const Approach = () => {
  return (
    <SectionContainer>
      <FadeInSection>
        <HeaderContainer>
          <H2>Foco no que importa: Resultado</H2>
          <P>
            Minha abordagem não é sobre tecnologia pela tecnologia. É sobre resolver os problemas que impedem sua empresa de escalar.
          </P>
        </HeaderContainer>

        <Grid>
          <Item>
            <ItemTitle>Recuperar receita perdida</ItemTitle>
            <ItemText>
              Identificar e fechar os vazamentos no seu funil de vendas onde leads qualificados estão sendo ignorados ou perdidos.
            </ItemText>
          </Item>
          
          <Item>
            <ItemTitle>Aumentar conversão</ItemTitle>
            <ItemText>
              Sistemas que nutrem e engajam leads automaticamente, garantindo que sua equipe comercial fale apenas com quem está pronto para comprar.
            </ItemText>
          </Item>

          <Item>
            <ItemTitle>Reduzir ineficiência</ItemTitle>
            <ItemText>
              Eliminar tarefas repetitivas e manuais que consomem o tempo valioso do seu time, permitindo foco em estratégia e vendas.
            </ItemText>
          </Item>

          <Item>
            <ItemTitle>Criar previsibilidade</ItemTitle>
            <ItemText>
              Transformar processos caóticos em máquinas de crescimento mensuráveis, onde você sabe exatamente o que esperar do próximo mês.
            </ItemText>
          </Item>
        </Grid>
      </FadeInSection>
    </SectionContainer>
  );
};

export default Approach;
