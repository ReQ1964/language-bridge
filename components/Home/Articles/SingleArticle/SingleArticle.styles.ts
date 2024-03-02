import styled from 'styled-components'

const ArticleItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: left;
  margin: 0 auto;
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 500px;
  }
  img {
    height: 100%;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    border-radius: 0.8rem;
  }
  h2 {
    font-size: 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
`
export { ArticleItem }
