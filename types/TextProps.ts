import { StaticImageData } from 'next/image'

export type TextProps = {
  image: string | StaticImageData
  imageAlt: string
  title: string
  snippet: string
  level: string
}
