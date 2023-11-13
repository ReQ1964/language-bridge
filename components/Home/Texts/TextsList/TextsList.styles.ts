import styled from 'styled-components'

const TextsHeading = styled.h3`
  color: ${(props) => props.theme.colors.text.tertiary};
  margin: 3rem 0 1rem 1rem;
`

const TextsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export { TextsUl, TextsHeading }
