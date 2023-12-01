import { TextProps } from '@/interfaces/TextProps'
import SingleText from '../SingleText/SingleText'
import { TextsUl, TextsHeading, TextsSection } from './TextsList.styles'
import LoadingIcon from '@/components/Reusable/LoadingIcon/LoadingIcon'
import ErrorText from '@/components/Reusable/ErrorText/ErrorText'
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton'

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
    <TextsSection>
      <TextsHeading>Popular texts</TextsHeading>
      {isLoading ? (
        <LoadingIcon />
      ) : error ? (
        <ErrorText>Failed to download the texts</ErrorText>
      ) : (
        <>
          <TextsUl>
            {texts.map((item: TextProps) => (
              <SingleText
                key={item.title}
                title={item.title}
                snippet={item.snippet}
                image={item.image}
                imageAlt={item.imageAlt}
                level={item.level}
              />
            ))}
          </TextsUl>
          <SeeMoreButton />
        </>
      )}
    </TextsSection>
  )
}

export default TextsList
