import axios from 'axios'
import PremiumDiscount from '@/components/Home/PremiumDiscount/PremiumDiscount'
import Hero from '@/components/Home/Hero/Hero'
import Description from '@/components/Home/Description/Description'
import ArticlesList from '@/components/Home/Articles/ArticlesList/ArticlesList'
import { ArticleProps } from '@/interfaces/ArticleProps'
import { TextProps } from '@/interfaces/TextProps'
import TextsList from '@/components/Home/Texts/TextsList/TextsList'

const HomePage = ({
  articles,
  texts,
}: {
  articles: Array<ArticleProps>
  texts: Array<TextProps>
}) => {
  return (
    <>
      <PremiumDiscount />
      <Hero />
      <Description />
      <ArticlesList articles={articles} />
      <TextsList texts={texts} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    // Use Promise.all to fetch data from multiple sources concurrently
    const [articlesResponse, textsResponse] = await Promise.all([
      axios.get(
        'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
      ),
      axios.get(
        'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/texts/english.json'
      ),
    ])

    if (!articlesResponse.data || !textsResponse.data) {
      return {
        notFound: true,
      }
    }

    const transformedArticles = Object.keys(articlesResponse.data).map((key) => ({
      title: articlesResponse.data[key].title,
      description: articlesResponse.data[key].description,
      image: articlesResponse.data[key].image,
      imageAlt: articlesResponse.data[key].imageAlt,
      funfact: articlesResponse.data[key].funfact || null,
    }))

    const transformedTexts = Object.keys(textsResponse.data).map((key) => ({
      title: textsResponse.data[key].title,
      snippet: textsResponse.data[key].snippet,
      image: textsResponse.data[key].image,
      imageAlt: textsResponse.data[key].imageAlt,
    }))

    return {
      props: {
        articles: transformedArticles,
        texts: transformedTexts,
      },
      revalidate: 3600,
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      notFound: true,
    }
  }
}

export default HomePage
