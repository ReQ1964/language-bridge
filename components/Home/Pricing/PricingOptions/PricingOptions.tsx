import PricingHeading from '../PricingHeading/PricingHeading'
import { PricingSection } from './PricingOptions.styles'
import SinglePricingOption from '../SinglePricingOption/SinglePricingOption'
import { SwiperSlide } from 'swiper/react'
import { PricingProps } from '@/types/PricingProps'
import capitalizeWord from '@/utils/capitalizeWord'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

const PricingOptions = ({ pricingOptions }: { pricingOptions: Array<PricingProps> }) => {
  return (
    <>
      <PricingHeading />
      <PricingSection
        spaceBetween={11}
        slidesPerView={1}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
      >
        {pricingOptions.map((option) => {
          const featuresArray: string[] = Object.values(option.features)
          const transformedPrice = option.price === 0 ? 'Free' : `$${option.price} / month`

          return (
            <SwiperSlide key={option.type}>
              <SinglePricingOption
                type={capitalizeWord(option.type)}
                price={transformedPrice}
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
