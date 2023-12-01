import { CheckCircleTwoTone } from '@ant-design/icons'
import {
  PricingOption,
  Feature,
  FeatureList,
  AntDButton,
  Price,
} from './SinglePricingOption.styles'
import { PricingProps } from '@/interfaces/PricingProps'

const SinglePricingOption = ({ type, price, features, featured }: PricingProps) => {
  return (
    <PricingOption $featured={featured}>
      <h2>{type}</h2>
      <Price $featured={featured}>{price}</Price>
      <FeatureList>
        {features.map((feature) => (
          <Feature key={Math.random()}>
            <CheckCircleTwoTone />
            <p>{feature}</p>
          </Feature>
        ))}
      </FeatureList>
      <AntDButton $featured={featured} size="large">
        Get started
      </AntDButton>
    </PricingOption>
  )
}

export default SinglePricingOption
