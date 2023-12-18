import styled from 'styled-components'
import { Button } from 'antd'
import Image from 'next/image'

const TextItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  padding: 2rem;
  border-bottom: 1px solid #e6e6e6;
  &:nth-of-type(1) {
    border-top: 1px solid #e6e6e6;
  }
`

const NextImage = styled(Image)`
  height: auto;
  width: 100%;
`

const AntButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background.primary.color};
  color: ${(props) => props.theme.colors.text.secondary};
`

const UpperContainer = styled.div`
  padding: 0 0.5rem;
  p {
    margin-top: 0.5rem;
  }
`
const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 0.5rem;
  }
`

export { TextItem, AntButton, UpperContainer, NextImage, LowerContainer }
