import styled from 'styled-components'

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  max-width: 800px;
  margin: 0 auto;
  height: 40vh;
`

const Option = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  span {
    font-size: 25px;
  }
  p {
    margin-top: 2px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.background.primary.tint1};
  }
  &:nth-child(2) p {
    color: ${(props) => props.theme.colors.text.tertiary};
  }
  &:nth-child(3) {
    color: ${(props) => props.theme.colors.text.error};
  }
`

export { Option, OptionsList }
