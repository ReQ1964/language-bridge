import styled from 'styled-components'

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  svg {
    font-size: 30px;
    color: ${(props) => props.theme.colors.background.primary.color};
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
`

const ProvidersHeading = styled.h4`
  position: relative;
  &::before,
  &::after {
    content: '';
    display: block;
    width: clamp(15%, 10vw, 30%);
    height: 1px;
    background: black;
    position: absolute;
    top: 50%;
  }

  &::before {
    left: 10%;
  }

  &::after {
    right: 10%;
  }
`

export { IconsContainer, ProvidersHeading }
