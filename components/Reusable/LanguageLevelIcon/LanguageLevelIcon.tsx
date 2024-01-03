import Image from 'next/image'
import a1_filled from '@/public/icons/language_level/a1_filled.png'
import a2_filled from '@/public/icons/language_level/a2_filled.png'
import b1_filled from '@/public/icons/language_level/b1_filled.png'
import b2_filled from '@/public/icons/language_level/b2_filled.png'
import c1_filled from '@/public/icons/language_level/c1_filled.png'
import c2_filled from '@/public/icons/language_level/c2_filled.png'
import a1_blank from '@/public/icons/language_level/a1_blank.png'
import a2_blank from '@/public/icons/language_level/a2_blank.png'
import b1_blank from '@/public/icons/language_level/b1_blank.png'
import b2_blank from '@/public/icons/language_level/b2_blank.png'
import c1_blank from '@/public/icons/language_level/c1_blank.png'
import c2_blank from '@/public/icons/language_level/c2_blank.png'

type LanguageLevelIconProps = {
  level: string
  type: 'filled' | 'blank'
  height: number
  width: number
}

const LanguageLevelIcon = ({ level, type, height, width }: LanguageLevelIconProps) => {
  let imageSource
  if (type === 'filled') {
    switch (level) {
      case 'a1':
        imageSource = a1_filled
        break
      case 'a2':
        imageSource = a2_filled
        break
      case 'b1':
        imageSource = b1_filled
        break
      case 'b2':
        imageSource = b2_filled
        break
      case 'c1':
        imageSource = c1_filled
        break
      case 'c2':
        imageSource = c2_filled
        break
      default:
        imageSource = a1_filled
    }
  } else {
    switch (level) {
      case 'a1':
        imageSource = a1_blank
        break
      case 'a2':
        imageSource = a2_blank
        break
      case 'b1':
        imageSource = b1_blank
        break
      case 'b2':
        imageSource = b2_blank
        break
      case 'c1':
        imageSource = c1_blank
        break
      case 'c2':
        imageSource = c2_blank
        break
      default:
        imageSource = a1_blank
    }
  }

  return (
    <Image src={imageSource} unoptimized width={width} height={height} alt={`Level: ${level}`} />
  )
}

export default LanguageLevelIcon
