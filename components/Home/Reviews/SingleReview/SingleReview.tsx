import { Rate } from 'antd'
import { ReviewArticle } from './SingleReview.styles'

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
    <ReviewArticle>
      <Rate disabled defaultValue={rating} />
      <p>{content}</p>
      <h4>{author}</h4>
    </ReviewArticle>
  )
}

export default SingleReview
