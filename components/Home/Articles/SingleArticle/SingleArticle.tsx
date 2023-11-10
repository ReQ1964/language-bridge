import React from 'react'
import ArticleFunfact from '../ArticleFunfact/ArticleFunfact'
import Image from 'next/image'
import { ArticleProps } from '@/interfaces/ArticleProps'

const SingleArticle = ({ image, imageAlt, title, description, funfact }: ArticleProps) => {
  return (
    <li>
      <Image src={image} height={250} width={250} alt={imageAlt} />
      <h2>{title}</h2>
      <p>{description}</p>
      {funfact ? <ArticleFunfact content={funfact} /> : null}
    </li>
  )
}

export default SingleArticle
