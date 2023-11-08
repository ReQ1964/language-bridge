import type { MenuProps } from 'antd'
import Image from 'next/image'
import { Dropdown } from 'antd'
import gb_icon from '@/public/icons/flags/gb.svg'
import es_icon from '@/public/icons/flags/es.svg'
import show_more_icon from '@/public/icons/navigation/menu_show_more.svg'
import { DropdownContainer, DropdownButton } from './LanguagePicker.style'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <DropdownContainer>
        <Image src={gb_icon} width={22} height={22} alt="Flag of the United Kingdom" />
        <p>ENG</p>
      </DropdownContainer>
    ),
  },
  {
    key: '2',
    label: (
      <DropdownContainer>
        <Image src={es_icon} width={22} height={22} alt="Flag of Spain" />
        <p>SPA</p>
      </DropdownContainer>
    ),
  },
]

const LanguagePicker = () => (
  <Dropdown menu={{ items }} placement="bottom">
    <DropdownButton>
      <Image src={gb_icon} width={24} height={24} alt="Flag of the United Kingdom" />
      <Image src={show_more_icon} width={24} height={24} alt="Click to show languages to choose" />
    </DropdownButton>
  </Dropdown>
)

export default LanguagePicker
export default LanguagePicker
