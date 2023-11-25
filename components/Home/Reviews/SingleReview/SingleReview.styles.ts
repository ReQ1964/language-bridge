import styled from 'styled-components'

const ReviewArticle = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 1rem;
  max-height: 400px;
  min-height: 350px;
  p:nth-of-type(1) {
    overflow: hidden;
  }
`
export { ReviewArticle }
