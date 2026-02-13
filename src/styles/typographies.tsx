import styled from "styled-components";
import { TypeTypographies } from "../types/typographies";

export const H1 = styled.h1<TypeTypographies>`
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--color-text);
  margin-bottom: 1rem;
`;

export const H2 = styled.h2<TypeTypographies>`
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.3;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

export const Span = styled.span<TypeTypographies>`
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-accent);
`;

export const P = styled.p<TypeTypographies>`
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`;
