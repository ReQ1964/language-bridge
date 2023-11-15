import axios from 'axios'
import PremiumDiscount from '@/components/Home/PremiumDiscount/PremiumDiscount'
import Hero from '@/components/Home/Hero/Hero'
import Description from '@/components/Home/Description/Description'
import ArticlesList from '@/components/Home/Articles/ArticlesList/ArticlesList'
import { ArticleProps } from '@/interfaces/ArticleProps'
import TextsList from '@/components/Home/Texts/TextsList/TextsList'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import useStore from '@/store/store'

const HomePage = ({ articles }: { articles: Array<ArticleProps> }) => {
  const currentLanguage = useStore((state) => state.currentLanguage)

  const fetchTexts = async () => {
    const textsResponse = await axios.get(
      `https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/texts/${currentLanguage}.json`
    )
    const transformedTexts = Object.keys(textsResponse.data).map((key) => ({
      title: textsResponse.data[key].title,
      snippet: textsResponse.data[key].snippet,
      image: textsResponse.data[key].image,
      imageAlt: textsResponse.data[key].imageAlt,
    }))

    return transformedTexts
  }

  const {
    isLoading,
    error,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchTexts,
  })

  useEffect(() => {
    refetch()
  }, [currentLanguage, refetch])

  return (
    <>
      <PremiumDiscount />
      <Hero />
      <Description />
      <ArticlesList articles={articles} />
      <TextsList texts={data} isLoading={isLoading} error={error} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const articlesResponse = await axios.get(
      'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
    )

    if (!articlesResponse.data) {
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

    return {
      props: {
        articles: transformedArticles,
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
