import React from 'react'

import SingleArticle from '../SingleArticle/SingleArticle'
import { ArticleProps } from '@/types/ArticleProps'
import { ArticlesUL, ArticlesSection } from './ArticlesList.styles'

const ArticlesList = ({ articles }: { articles: Array<ArticleProps> }) => {
  return (
    <ArticlesSection>
      <ArticlesUL>
        {articles.map((item: ArticleProps) => {
          return (
            <SingleArticle
              key={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              funfact={item.funfact}
            />
          )
        })}
      </ArticlesUL>
    </ArticlesSection>
  )
}

export default ArticlesList
