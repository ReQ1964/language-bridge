import styled from 'styled-components'

const DiscountContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.primary.shade2};
  color: ${(props) => props.theme.colors.text.quaternary};
  text-align: center;
  padding: 1rem 0.2rem;
`

export { DiscountContainer }
