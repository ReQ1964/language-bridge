import styled from 'styled-components'
import { Button } from 'antd'

const PricingOption = styled.div<{ $featured?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: ${(props) => (props.$featured ? '1.5px solid black' : '1px solid gray')};
  border-radius: 0.8rem;
  min-height: 320px;
  max-height: 400px;
  box-shadow: ${(props) => (props.$featured ? '8px 8px 23px -16px rgba(66, 68, 90, 1)' : null)};
`

const Price = styled.h3<{ $featured?: boolean }>`
  padding: 0.5rem;
  background-color: ${(props) =>
    props.$featured ? '#8ea6ed' : props.theme.colors.background.primary.tint1};
  color: ${(props) =>
    props.$featured ? props.theme.colors.text.secondary : props.theme.colors.text.primary};
`

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Feature = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
`

const AntDButton = styled(Button)<{ $featured?: boolean }>`
  margin: 0 auto;
  width: 90%;
  color: ${(props) =>
    props.$featured ? props.theme.colors.text.secondary : props.theme.colors.text.tertiary};
  border-color: ${(props) => props.theme.colors.text.tertiary};
  background-color: ${(props) =>
    props.$featured ? props.theme.colors.background.primary.color : 'white'};
`

export { PricingOption, Feature, FeatureList, AntDButton, Price }
