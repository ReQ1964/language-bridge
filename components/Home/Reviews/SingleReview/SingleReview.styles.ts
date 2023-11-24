import styled from 'styled-components'

const ReviewArtlice = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  padding: 1rem;
  height: 350px;
  p:nth-of-type(1) {
    overflow: hidden;
  }
`
export { ReviewArtlice }
