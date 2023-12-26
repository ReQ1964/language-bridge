import useStore from '@/store/store'
import gb_icon from '@/public/icons/flags/gb.svg'
import es_icon from '@/public/icons/flags/es.svg'
import Image from 'next/image'
import { Progress } from 'antd'
import { ProgressTileContainer, LanguageContainer, LanguageParagraph } from './ProgressTile.styles'
import capitalizeWord from '@/utils/capitalizeWord'

const ProgressTile = ({ wordsQuantity }: { wordsQuantity: number }) => {
  const currentLanguage = useStore((state) => state.currentLanguage)

  const esIcon = <Image src={es_icon} width={22} height={22} alt="Flag of the United Kingdom" />
  const gbIcon = <Image src={gb_icon} width={22} height={22} alt="Flag of Spain" />
  const currentIcon = currentLanguage === 'spanish' ? esIcon : gbIcon

  return (
    <ProgressTileContainer>
      <Progress type="dashboard" percent={75} />
      <LanguageParagraph>
        Fluency in
        <LanguageContainer>
          {currentIcon}
          {capitalizeWord(currentLanguage)}{' '}
        </LanguageContainer>
      </LanguageParagraph>
      <p>Words learned: {wordsQuantity}</p>
    </ProgressTileContainer>
  )
}

export default ProgressTile
