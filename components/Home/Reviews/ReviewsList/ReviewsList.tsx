import ReviewsHeading from '../ReviewsHeading/ReviewsHeading'
import SingleReview from '../SingleReview/SingleReview'
import { ReviewsSection } from './ReviewsList.styles'
import { SwiperSlide } from 'swiper/react'
import { ReviewProps } from '@/interfaces/ReviewProps'

const ReviewsList = ({ reviews }: { reviews: Array<ReviewProps> }) => {
  return (
    <>
      <ReviewsHeading />
      <ReviewsSection spaceBetween={11} slidesPerView={2}>
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
