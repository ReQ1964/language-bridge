import { Rate } from 'antd'
import { ReviewArtlice } from './SingleReview.styles'

const SingleReview = ({
  rating,
  content,
  author,
}: {
  rating: number
  content: string
  author: string
}) => {
  return (
    <ReviewArtlice>
      <Rate disabled defaultValue={rating} />
      <p>{content}</p>
      <h4>{author}</h4>
    </ReviewArtlice>
  )
}

export default SingleReview
