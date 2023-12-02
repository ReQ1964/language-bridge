import styled from 'styled-components'
import { Button } from 'antd'
import Image from 'next/image'

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 1rem;
  padding: 1.2rem;
  margin: 1.2rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.background.primary.tint1};
  h4 {
    text-align: center;
  }
  p:last-child {
    text-align: center;
  }
`

const Btn = styled(Button)`
  background-color: ${(props) => props.theme.colors.background.primary.color};
  color: ${(props) => props.theme.colors.text.secondary};
  width: 60%;
  margin: 0 auto;
`

const HighlightedSpan = styled.span`
  color: ${(props) => props.theme.colors.text.tertiary};
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.background.primary.shade1};
  }
`

const NextImage = styled(Image)`
  display: block;
  width: 100%;
  height: 80%;
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto 2rem;
`

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.text.error};
  margin-top: 0.5rem;
`

const ForgotPassword = styled.p`
  color: ${(props) => props.theme.colors.text.tertiary};
  text-align: right;
  margin-top: -0.9rem;
`

export { SForm, Btn, HighlightedSpan, NextImage, ErrorMessage, ForgotPassword }
