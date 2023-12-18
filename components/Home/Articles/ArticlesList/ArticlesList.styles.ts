import styled from 'styled-components'
import bg from '@/public/images/background-elements/vectorblock.png'

const ArticlesUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  padding-top: 2rem;
`
const ArticlesSection = styled.section`
  background-image: url(${bg.src});
  background-position: right 10% top -20px;
  background-repeat: no-repeat;
`

export { ArticlesUL, ArticlesSection }
