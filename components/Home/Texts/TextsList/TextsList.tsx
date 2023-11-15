import { TextProps } from '@/interfaces/TextProps'
import SingleText from '../SingleText/SingleText'
import { TextsUl, TextsHeading } from './TextsList.styles'
import LoadingIcon from '@/components/Reusable/LoadingIcon/LoadingIcon'
import ErrorText from '@/components/Reusable/ErrorText/ErrorText'

const TextsList = ({
  texts,
  isLoading,
  error,
}: {
  texts: Array<TextProps>
  isLoading: boolean
  error: unknown
}) => {
  return (
    <section>
      <TextsHeading>Popular texts</TextsHeading>
      {isLoading ? (
        <LoadingIcon />
      ) : error ? (
        <ErrorText>Failed to download the texts</ErrorText>
      ) : (
        <TextsUl>
          {texts.map((item: TextProps) => (
            <SingleText
              key={item.title}
              title={item.title}
              snippet={item.snippet}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </TextsUl>
      )}
    </section>
  )
}

export default TextsList
