import Image from 'next/image'
import a1 from '@/public/icons/language_level/a1.png'
import a2 from '@/public/icons/language_level/a2.png'
import b1 from '@/public/icons/language_level/b1.png'
import b2 from '@/public/icons/language_level/b2.png'
import c1 from '@/public/icons/language_level/c1.png'
import c2 from '@/public/icons/language_level/c2.png'

type LanguageLevelIconProps = {
  level: 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2'
  height: number
  width: number
}

const LanguageLevelIcon = ({ level, height, width }: LanguageLevelIconProps) => {
  let imageSource

  switch (level) {
    case 'a1':
      imageSource = a1
      break
    case 'a2':
      imageSource = a2
      break
    case 'b1':
      imageSource = b1
      break
    case 'b2':
      imageSource = b2
      break
    case 'c1':
      imageSource = c1
      break
    case 'c2':
      imageSource = c2
      break
    default:
      imageSource = a1
  }

  return (
    <Image src={imageSource} unoptimized width={width} height={height} alt={`Level: ${level}`} />
  )
}

export default LanguageLevelIcon
