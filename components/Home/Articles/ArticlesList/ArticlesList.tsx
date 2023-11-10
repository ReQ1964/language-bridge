import React from 'react'

import SingleArticle from '../SingleArticle/SingleArticle'
import { ArticleProps } from '@/interfaces/ArticleProps'

const ArticlesList = ({ articles }: { articles: Array<ArticleProps> }) => {
  return (
    <section>
      <ul>
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
      </ul>
    </section>
  )
}

export default ArticlesList
