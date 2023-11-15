import type { SelectProps } from 'antd'
import Image from 'next/image'
import { Select } from 'antd'
import gb_icon from '@/public/icons/flags/gb.svg'
import es_icon from '@/public/icons/flags/es.svg'
import { SelectElementContainer } from './LanguagePicker.style'
import useStore from '@/store/store'
import { StoreState } from '@/store/store'

const options: SelectProps['options'] = [
  {
    value: 'english',
    label: (
      <SelectElementContainer>
        <Image src={gb_icon} width={22} height={22} alt="Flag of the United Kingdom" />
      </SelectElementContainer>
    ),
  },
  {
    value: 'spanish',
    label: (
      <SelectElementContainer>
        <Image src={es_icon} width={22} height={22} alt="Flag of Spain" />
      </SelectElementContainer>
    ),
  },
]

const LanguagePicker = () => {
  const changeCurrentLanguage = useStore((state) => state.changeCurrentLanguage)
  const currentLanguage = useStore((state) => state.currentLanguage)

  const onLanguageChange = (value: StoreState['currentLanguage']) => {
    changeCurrentLanguage(value)
  }

  return <Select defaultValue={currentLanguage} options={options} onChange={onLanguageChange} />
}

export default LanguagePicker
