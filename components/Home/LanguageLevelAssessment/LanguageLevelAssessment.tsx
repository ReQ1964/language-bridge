import {
  AssessmentContainer,
  AntDButton,
  RightContainer,
  LeftContainer,
  ButtonContainer,
} from './LanguageLevelAssessment.styles'
import capitalizeWord from '@/utils/capitalizeWord'
import Image from 'next/image'
import gb_icon from '@/public/icons/flags/gb.svg'
import es_icon from '@/public/icons/flags/es.svg'
import { useRouter } from 'next/router'

const LanguageLevelAssessment = ({ language }: { language: 'english' | 'spanish' }) => {
  const router = useRouter()

  const icon =
    language === 'english' ? (
      <Image src={gb_icon} width={22} height={22} alt="Flag of the United Kingdom" />
    ) : (
      <Image src={es_icon} width={22} height={22} alt="Flag of Spain" />
    )

  const navigateToAssessmentPage = () => {
    router.push('/language-assessment')
  }

  return (
    <AssessmentContainer>
      <LeftContainer>
        <h4>
          {icon}
          Assess your {capitalizeWord(language)} language skills in minutes with our fluency test.{' '}
        </h4>
      </LeftContainer>
      <RightContainer>
        <ButtonContainer>
          <AntDButton onClick={navigateToAssessmentPage}>
            Test Your {capitalizeWord(language)}
          </AntDButton>
        </ButtonContainer>
      </RightContainer>
    </AssessmentContainer>
  )
}

export default LanguageLevelAssessment
