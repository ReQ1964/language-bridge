import styled from 'styled-components'
import { Button } from 'antd'

const PricingOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  min-height: 320px;
  max-height: 400px;
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
