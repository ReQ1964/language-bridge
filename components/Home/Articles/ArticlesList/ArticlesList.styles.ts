import styled from 'styled-components'
import bg from '@/public/images/background-elements/vectorblock.png'

const ArticlesUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 5rem;
  padding: 3rem;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 10rem;
  }
`
const ArticlesSection = styled.section`
  background-image: url(${bg.src});
  background-position: right 10% top -20px;
  background-repeat: no-repeat;
`

export { ArticlesUL, ArticlesSection }
