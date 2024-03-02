import styled from 'styled-components'
import { Swiper } from 'swiper/react'

const PricingSection = styled(Swiper)`
  padding: 2rem 2rem 4rem;
  max-width: 1100px;
  .swiper-pagination {
    position: relative !important;
    margin-top: 2rem;
  }
`

export { PricingSection }
