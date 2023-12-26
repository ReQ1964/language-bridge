import styled from 'styled-components'

const BackNavigationNav = styled.nav`
  text-align: center;
  position: relative;
  padding: 1.5rem 0;
  span {
    position: absolute;
    left: ${(props) => props.theme.sizes.defaultMargins};
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
  }
`

export { BackNavigationNav }
