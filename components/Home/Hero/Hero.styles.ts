import styled from 'styled-components'
import Image from 'next/image'
import { Button as AntDButton } from 'antd'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: white;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.background.primary.color},
    #3f8feb
  );
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    div {
      align-items: flex-start;
    }
  }
`

const Button = styled(AntDButton)`
  background-color: ${(props) => props.theme.colors.background.secondary.color};
  color: white;
  border: none;
  font-weight: bold;
  &:hover {
    color: black;
  }
`

const NextImage = styled(Image)`
  width: 80%;
  height: 80%;
  max-width: 500px;
  max-height: 500px;
`

export { HeroSection, Button, NextImage }
