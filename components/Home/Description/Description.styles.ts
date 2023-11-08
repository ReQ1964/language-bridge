import styled from 'styled-components'

const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 3rem 0.8rem;
  margin: 2rem 0 2rem 0;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  h1 {
    color: ${(props) => props.theme.colors.text.tertiary};
  }
`

export { DescriptionSection }
