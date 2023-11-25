import PricingHeading from '../PricingHeading/PricingHeading'
import { PricingSection } from './PricingOptions.styles'
import SinglePricingOption from '../SinglePricingOption/SinglePricingOption'
import { SwiperSlide } from 'swiper/react'
import { PricingProps } from '@/interfaces/PricingProps'
import capitalizeWord from '@/utils/capitalizeWord'

const PricingOptions = ({ pricingOptions }: { pricingOptions: Array<PricingProps> }) => {
  return (
    <>
      <PricingHeading />
      <PricingSection spaceBetween={11} slidesPerView={1}>
        {pricingOptions.map((option) => {
          const featuresArray: string[] = Object.values(option.features)
          console.log(featuresArray)

          return (
            <SwiperSlide key={option.type}>
              <SinglePricingOption
                type={capitalizeWord(option.type)}
                price={option.price === 0 ? 'Free' : `$${option.price} / month`}
                features={featuresArray}
                featured={option.featured}
              />
            </SwiperSlide>
          )
        })}
      </PricingSection>
    </>
  )
}

export default PricingOptions
