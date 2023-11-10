import ArticleFunfact from '../ArticleFunfact/ArticleFunfact'
import Image from 'next/image'
import { ArticleProps } from '@/interfaces/ArticleProps'
import { ArticleItem } from './SingleArticle.styles'

const SingleArticle = ({ image, imageAlt, title, description, funfact }: ArticleProps) => {
  return (
    <ArticleItem>
      <Image src={image} width={0} height={0} sizes="100vw" alt={imageAlt} />
      <h2>{title}</h2>
      <p>{description}</p>
      {funfact ? <ArticleFunfact content={funfact} /> : null}
    </ArticleItem>
  )
}

export default SingleArticle
