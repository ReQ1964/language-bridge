import { StaticImageData } from 'next/image'

export type ArticleProps = {
  image: string | StaticImageData
  imageAlt: string
  title: string
  description: string
  funfact?: string
}
