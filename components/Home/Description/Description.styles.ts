import styled from 'styled-components'

const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 3rem 2.5rem;
  max-width: 700px;
  margin: 2rem auto 0;
  h1 {
    color: ${(props) => props.theme.colors.text.tertiary};
  }
`

export { DescriptionSection }
