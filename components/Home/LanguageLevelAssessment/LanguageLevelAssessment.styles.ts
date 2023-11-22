import styled from 'styled-components'
import { Button } from 'antd'

const AssessmentContainer = styled.article`
  display: flex;
  margin-top: 2rem;
  max-width: 450px;
  margin: 2rem auto 5rem;
  border-radius: 1.2rem;
  padding: 0 1rem;
`

const AntDButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background.primary.color};
  color: ${(props) => props.theme.colors.text.secondary};
`
const LeftContainer = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
  padding: 1.2rem;
  border-radius: 1.25rem 0 0 1.25rem;
  h4 {
    position: relative;
    line-height: 1.4rem;
    img {
      position: relative;
      top: 0.3rem;
      margin-right: 0.2rem;
    }
  }
`

const RightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 1.2rem;
  border-radius: 0 1.25rem 1.25rem 0;
  background-color: ${(props) => props.theme.colors.background.primary.color};
`

const ButtonContainer = styled.div`
  position: absolute;
  right: calc((120% - 150px) / 2);
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
  border-radius: 1rem;
`

export { AssessmentContainer, AntDButton, LeftContainer, RightContainer, ButtonContainer }
