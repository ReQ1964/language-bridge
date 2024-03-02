import ReviewsHeading from '../ReviewsHeading/ReviewsHeading'
import SingleReview from '../SingleReview/SingleReview'
import { ReviewsSection } from './ReviewsList.styles'
import { SwiperSlide } from 'swiper/react'
import { ReviewProps } from '@/types/ReviewProps'

const ReviewsList = ({ reviews }: { reviews: Array<ReviewProps> }) => {
  return (
    <>
      <ReviewsHeading />
      <ReviewsSection
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review: ReviewProps) => {
          return (
            <SwiperSlide key={Math.random()}>
              <SingleReview
                rating={review.rating}
                author={review.author}
                content={review.content}
              />
            </SwiperSlide>
          )
        })}
      </ReviewsSection>
    </>
  )
}

export default ReviewsList
