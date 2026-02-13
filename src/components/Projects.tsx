import { H1, H2, P } from "../styles/typographies";
import styled from "styled-components";
import { StyledButton } from "./Button";
import FadeInSection from "../components/FadeInSection";

const ProjectsContainer = styled.section`
  padding: 100px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

const SectionTitle = styled(H1)`
  margin-bottom: 4rem;
  text-align: left;
`;

// --- Featured Project Styles ---
const FeaturedProject = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 5rem;
  margin-bottom: 15rem; /* Increased margin for separation */
  align-items: center;
  min-height: 60vh; /* Make them visually larger/more prominent */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 8rem;
    min-height: auto;
  }
`;

const FeaturedImageContainer = styled.div`
  width: 100%;
  border-radius: 16px; /* Slightly larger radius */
  overflow: hidden;
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6); /* Stronger shadow */
  transition: transform 0.5s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
`;

const Badge = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: var(--color-accent);
  padding: 0.5rem 1rem; /* Larger badge */
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(100, 255, 218, 0.2);
`;

const FeaturedTitle = styled(H2)`
  font-size: 3rem; /* Larger Title */
  margin-bottom: 1.5rem;
`;

const FeaturedDescription = styled(P)`
  font-size: 1.2rem; /* Larger text */
  margin-bottom: 2.5rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

// --- Additional Projects Grid Styles ---
const AdditionalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const SmallCard = styled.div`
  background: var(--color-surface);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
  }
`;

const SmallTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const SmallDescription = styled.p`
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos em Destaque</SectionTitle>

      {/* Featured 1: Freeladash */}
      <FadeInSection>
        <FeaturedProject id="featured-freeladash">
          <LinkWrapper href="https://www.freeladash.com.br" target="_blank">
            <FeaturedImageContainer>
              <FeaturedImage src="./freeladash.png" alt="Freeladash Dashboard" />
            </FeaturedImageContainer>
          </LinkWrapper>
          <FeaturedContent>
            <FeaturedTitle>Freeladash</FeaturedTitle>
            <BadgeContainer>
              <Badge>Produto Ativo</Badge>
              <Badge>Clientes Reais</Badge>
            </BadgeContainer>
            <FeaturedDescription>
              Plataforma SaaS completa para gestão financeira e operacional de freelancers.
              <br/><br/>
              Resolve o problema da imprevisibilidade de receita transformando dados brutos em inteligência comercial. O sistema permite controle de horas, precificação automática e projeção de ganhos futuros.
            </FeaturedDescription>
            <LinkWrapper href="https://www.freeladash.com.br" target="_blank">
              <StyledButton>Acessar Plataforma</StyledButton>
            </LinkWrapper>
          </FeaturedContent>
        </FeaturedProject>
      </FadeInSection>

      {/* Featured 2: Zesty Scent Showcase (Perfumes) - Moved to Position 2 */}
      <FadeInSection>
        <FeaturedProject id="featured-perfumes">
           {/* Alternating Layout: Image Right? Keeping consistent left for now but can switch if requested */}
          <LinkWrapper href="https://zesty-scent-showcase.vercel.app" target="_blank">
            <FeaturedImageContainer>
              <FeaturedImage src="./perfume.png" alt="Zesty Scent Showcase" />
            </FeaturedImageContainer>
          </LinkWrapper>
          <FeaturedContent>
            <FeaturedTitle>Zesty Scent Showcase</FeaturedTitle>
            <BadgeContainer>
              <Badge>Experiência Imersiva</Badge>
              <Badge>Demonstrativo</Badge>
            </BadgeContainer>
            <FeaturedDescription>
              Landing Page desenhada para despertar sensações.
              <br/><br/>
              Utiliza design emocional, animações sutis e uma paleta de cores quente para transmitir a sofisticação do produto, elevando a percepção de valor da marca.
            </FeaturedDescription>
            <LinkWrapper href="https://zesty-scent-showcase.vercel.app" target="_blank">
              <StyledButton>Ver Projeto</StyledButton>
            </LinkWrapper>
          </FeaturedContent>
        </FeaturedProject>
      </FadeInSection>

      {/* Featured 3: Blog de Notícias - Moved to Position 3 */}
      <FadeInSection>
        <FeaturedProject id="featured-blog">
          <LinkWrapper href="https://jmkoygg.github.io/Blog-responsivo/" target="_blank">
            <FeaturedImageContainer>
              <FeaturedImage src="./project2.png" alt="Portal de Notícias" />
            </FeaturedImageContainer>
          </LinkWrapper>
          <FeaturedContent>
            <FeaturedTitle>Portal de Conteúdo</FeaturedTitle>
            <BadgeContainer>
               <Badge>Alta Performance</Badge>
               <Badge>Demonstrativo</Badge>
            </BadgeContainer>
            <FeaturedDescription>
              Sistema de distribuição de informação focado em retenção.
              <br/><br/>
              Desenvolvido com uma arquitetura "Mobile First" rigorosa, garantindo acessibilidade e velocidade de carregamento em qualquer dispositivo.
            </FeaturedDescription>
            <LinkWrapper href="https://jmkoygg.github.io/Blog-responsivo/" target="_blank">
              <StyledButton>Ver Projeto</StyledButton>
            </LinkWrapper>
          </FeaturedContent>
        </FeaturedProject>
      </FadeInSection>

      <H2 style={{ marginTop: '8rem', marginBottom: '2rem' }}>Mais Projetos</H2>
      
      <AdditionalGrid>
        <FadeInSection>
          <LinkWrapper href="https://jmkoygg.github.io/Site-construtora/" target="_blank">
            <SmallCard>
              <SmallTitle>Construtora Landing Page</SmallTitle>
              <SmallDescription>
                Otimização de conversão para setor imobiliário. Foco em captura de leads qualificados e autoridade.
              </SmallDescription>
              <StyledButton style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Ver Projeto</StyledButton>
            </SmallCard>
          </LinkWrapper>
        </FadeInSection>

        <FadeInSection>
          <LinkWrapper href="https://jmkoygg.github.io/Task-list/" target="_blank">
            <SmallCard>
              <SmallTitle>Gestor de Produtividade</SmallTitle>
              <SmallDescription>
                Aplicação focada em execução e "Task Management". Elimina a carga cognitiva de lembrar tarefas.
              </SmallDescription>
              <StyledButton style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Ver Projeto</StyledButton>
            </SmallCard>
          </LinkWrapper>
        </FadeInSection>

        <FadeInSection>
          <LinkWrapper href="https://jmkoygg.github.io/Trabalho-UFC-ICC/" target="_blank">
            <SmallCard>
              <SmallTitle>Integração de APIs</SmallTitle>
              <SmallDescription>
                Demonstração técnica de consumo de dados externos e manipulação de DOM assíncrona.
              </SmallDescription>
              <StyledButton style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Ver Projeto</StyledButton>
            </SmallCard>
          </LinkWrapper>
        </FadeInSection>
      </AdditionalGrid>

    </ProjectsContainer>
  );
};

export default Projects;
