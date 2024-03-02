import styled from 'styled-components'

const ReviewsHeader = styled.header`
  padding: 1rem;
  gap: 1rem;
  margin: 4rem 2rem 0;
  max-width: 500px;
  p {
    margin-top: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 4rem auto 1rem;
  }
`
export { ReviewsHeader }
