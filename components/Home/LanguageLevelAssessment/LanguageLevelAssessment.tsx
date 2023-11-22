import {
  AssessmentContainer,
  AntDButton,
  RightContainer,
  LeftContainer,
} from './LanguageLevelAssessment.styles'
import capitalizeWord from '@/utils/capitalizeWord'
import Image from 'next/image'
import gb_icon from '@/public/icons/flags/gb.svg'
import es_icon from '@/public/icons/flags/es.svg'

const LanguageLevelAssessment = ({ language }: { language: 'english' | 'spanish' }) => {
  const icon =
    language === 'english' ? (
      <Image src={gb_icon} width={22} height={22} alt="Flag of the United Kingdom" />
    ) : (
      <Image src={es_icon} width={22} height={22} alt="Flag of Spain" />
    )

  return (
    <AssessmentContainer>
      <LeftContainer>
        <h4>
          {icon}
          Assess your {capitalizeWord(language)} language skills in minutes with our fluency test.{' '}
        </h4>
      </LeftContainer>
      <RightContainer>
        <div>
          <AntDButton>Test Your {capitalizeWord(language)}</AntDButton>
        </div>
      </RightContainer>
    </AssessmentContainer>
  )
}

export default LanguageLevelAssessment
