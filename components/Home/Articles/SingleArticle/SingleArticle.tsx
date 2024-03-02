import Image from 'next/image'
import { ArticleProps } from '@/types/ArticleProps'
import { ArticleItem } from './SingleArticle.styles'

const SingleArticle = ({ image, imageAlt, title, description }: ArticleProps) => {
  return (
    <ArticleItem>
      <Image src={image} width={0} height={0} sizes="100vw" alt={imageAlt} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ArticleItem>
  )
}

export default SingleArticle
