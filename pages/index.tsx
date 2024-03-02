import { useEffect } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ArticleProps } from '@/types/ArticleProps'
import { ReviewProps } from '@/types/ReviewProps'
import { TextProps } from '@/types/TextProps'
import { PricingProps } from '@/types/PricingProps'
import useStore from '@/store/store'
import PremiumDiscount from '@/components/Home/PremiumDiscount/PremiumDiscount'
import Hero from '@/components/Home/Hero/Hero'
import Description from '@/components/Home/Description/Description'
import ArticlesList from '@/components/Home/Articles/ArticlesList/ArticlesList'
import TextsList from '@/components/Home/Texts/TextsList/TextsList'
import LanguageLevelAssessment from '@/components/Home/LanguageLevelAssessment/LanguageLevelAssessment'
import ReviewsList from '@/components/Home/Reviews/ReviewsList/ReviewsList'
import transformFirebaseData from '@/utils/transformFirebaseData'
import PricingOptions from '@/components/Home/Pricing/PricingOptions/PricingOptions'

type HomePageProps = {
  articles: Array<ArticleProps>
  reviews: Array<ReviewProps>
  pricingOptions: Array<PricingProps>
}

const HomePage = ({ articles, reviews, pricingOptions }: HomePageProps) => {
  const currentLanguage = useStore((state) => state.currentLanguage)

  const fetchTexts = async () => {
    const textsResponse = await axios.get(
      `https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/texts/${currentLanguage}.json`
    )
    const transformedTexts = transformFirebaseData(textsResponse.data) as Array<TextProps>

    return transformedTexts
  }

  const { isLoading, error, data, refetch } = useQuery({
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
      <TextsList texts={data || []} isLoading={isLoading} error={error} />
      <ReviewsList reviews={reviews} />
      <LanguageLevelAssessment language={currentLanguage} />
      <PricingOptions pricingOptions={pricingOptions} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const [articlesResponse, reviewsResponse, pricingOptionsResponse] = await Promise.all([
      axios.get(
        'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/articles.json'
      ),
      axios.get(
        'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/reviews.json'
      ),
      axios.get(
        'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app/pricingOptions.json'
      ),
    ])

    if (!articlesResponse.data || !reviewsResponse.data || !pricingOptionsResponse.data) {
      return {
        notFound: true,
      }
    }

    const transformedReviews = transformFirebaseData(reviewsResponse.data)
    const transformedArticles = transformFirebaseData(articlesResponse.data)
    const transformedPricingOptions = transformFirebaseData(pricingOptionsResponse.data)

    return {
      props: {
        articles: transformedArticles,
        reviews: transformedReviews,
        pricingOptions: transformedPricingOptions,
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
