import { TextProps } from '@/interfaces/TextProps'
import SingleText from '../SingleText/SingleText'
import { TextsUl, TextsHeading } from './TextsList.styles'

const TextsList = ({ texts }: { texts: Array<TextProps> }) => {
  return (
    <section>
      <TextsHeading>Popular texts</TextsHeading>
      <TextsUl>
        {texts.map((item: TextProps) => {
          return (
            <SingleText
              key={item.title}
              title={item.title}
              snippet={item.snippet}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          )
        })}
      </TextsUl>
    </section>
  )
}

export default TextsList
