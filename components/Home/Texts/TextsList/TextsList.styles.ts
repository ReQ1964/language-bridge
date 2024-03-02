import styled from 'styled-components'

const TextsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`

const TextsHeading = styled.h3`
  color: ${(props) => props.theme.colors.text.tertiary};
  align-self: flex-start;
  max-width: 500px;
  padding-bottom: 1rem;
`

const TextsUl = styled.ul`
  display: grid;
  gap: 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    gap: 3rem;
  }
`

export { TextsUl, TextsHeading, TextsSection }
