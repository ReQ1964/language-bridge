import axios from 'axios'
import PremiumDiscount from '@/components/Home/PremiumDiscount/PremiumDiscount'
import Hero from '@/components/Home/Hero/Hero'
import Description from '@/components/Home/Description/Description'
import ArticlesList from '@/components/Home/Articles/ArticlesList/ArticlesList'
import { ArticleProps } from '@/interfaces/ArticleProps'

const HomePage = ({ articles }: { articles: Array<ArticleProps> }) => {
  return (
    <>
      <PremiumDiscount />
      <Hero />
      <Description />
      <ArticlesList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(
    'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
  )

  const transformedArticles = []

  for (const key in res.data) {
    transformedArticles.push({
      id: key,
      title: res.data[key].title,
      description: res.data[key].description,
      image: res.data[key].image,
      imageAlt: res.data[key].imageAlt,
      funfact: res.data[key].funfact || null,
    })
  }

  return {
    props: {
      articles: transformedArticles,
    },
  }
}

export default HomePage
