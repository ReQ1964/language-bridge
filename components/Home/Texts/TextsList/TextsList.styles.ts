import styled from 'styled-components'

const TextsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextsHeading = styled.h3`
  color: ${(props) => props.theme.colors.text.tertiary};
  margin: 3rem 0 1rem 1rem;
  align-self: flex-start;
`

const TextsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export { TextsUl, TextsHeading, TextsSection }
