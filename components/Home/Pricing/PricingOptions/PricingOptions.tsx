import PricingHeading from '../PricingHeading/PricingHeading'
import { PricingSection } from './PricingOptions.styles'
import SinglePricingOption from '../SinglePricingOption/SinglePricingOption'
import { SwiperSlide } from 'swiper/react'

const mock = ['good', 'amazing', 'great', 'wow']

const PricingOptions = () => {
  return (
    <>
      <PricingHeading />
      <PricingSection spaceBetween={11} slidesPerView={2}>
        <SwiperSlide>
          <SinglePricingOption type="Basic" price="Free" features={mock} />
        </SwiperSlide>
        <SwiperSlide>
          <SinglePricingOption type="Basic" price="Free" features={mock} />
        </SwiperSlide>
        <SwiperSlide>
          <SinglePricingOption type="Basic" price="Free" features={mock} featured={true} />
        </SwiperSlide>
      </PricingSection>
    </>
  )
}

export default PricingOptions
