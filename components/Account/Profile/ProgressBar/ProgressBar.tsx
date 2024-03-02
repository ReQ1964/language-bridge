import LanguageLevelIcon from '@/components/Reusable/LanguageLevelIcon/LanguageLevelIcon'
import { Progress } from 'antd'
import { ProgressBarContainer } from './ProgressBar.styles'

const ProgressBar = ({ wordsCount }: { wordsCount: number }) => {
  const iconSizes = {
    width: 25,
    height: 25,
  }

  const calculatePercentage = () => {
    const maximumCount = 100000

    const percentage = Math.round((wordsCount / maximumCount) * 100)

    return Math.min(100, Math.max(0, percentage))
  }

  return (
    <ProgressBarContainer>
      <Progress type="dashboard" percent={calculatePercentage()} />

      <LanguageLevelIcon level="a1" type={wordsCount > 5000 ? 'filled' : 'blank'} {...iconSizes} />
      <LanguageLevelIcon level="a2" type={wordsCount > 20000 ? 'filled' : 'blank'} {...iconSizes} />
      <LanguageLevelIcon level="b1" type={wordsCount > 40000 ? 'filled' : 'blank'} {...iconSizes} />
      <LanguageLevelIcon level="b2" type={wordsCount > 60000 ? 'filled' : 'blank'} {...iconSizes} />
      <LanguageLevelIcon level="c1" type={wordsCount > 77000 ? 'filled' : 'blank'} {...iconSizes} />
      <LanguageLevelIcon level="c2" type={wordsCount > 93000 ? 'filled' : 'blank'} {...iconSizes} />
    </ProgressBarContainer>
  )
}

export default ProgressBar
