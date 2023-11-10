import styled from 'styled-components'

const ArticleItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  img {
    height: auto;
    width: 100%;
  }
  h2 {
    font-size: 2rem;
  }
`
export { ArticleItem }
