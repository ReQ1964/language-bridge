import styled from 'styled-components'

const DailyAnnoucementContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.primary.color};
  border-radius: 0.5rem;
  color: white;
  padding: 1.8rem 1rem;
  margin: ${(props) => props.theme.sizes.defaultMargins};
  img {
    height: 100%;
  }
  p {
    margin-top: 0.5rem;
  }
`

const ProfileSection = styled.section`
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
`

export { DailyAnnoucementContainer, ProfileSection }
