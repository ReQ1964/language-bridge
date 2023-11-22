import styled from 'styled-components'
import { Button } from 'antd'

const AssessmentContainer = styled.article`
  position: relative;
  margin-top: 2rem;
  max-width: 450px;
  margin: 2rem auto 5rem;
  border-radius: 1.2rem;
`

const AntDButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background.primary.color};
  color: ${(props) => props.theme.colors.text.secondary};
`
const LeftContainer = styled.div`
  width: 65%;
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
  padding: 1.5rem;
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
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  padding: 1.5rem;
  border-radius: 0 1.25rem 1.25rem 0;
  background-color: ${(props) => props.theme.colors.background.primary.color};
`

const ButtonContainer = styled.div`
  position: absolute;
  right: calc((115% - 150px) / 2);
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
  border-radius: 1rem;
`

export { AssessmentContainer, AntDButton, LeftContainer, RightContainer, ButtonContainer }
