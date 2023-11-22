import { RightOutlined } from '@ant-design/icons'
import { AntDButton } from './SeeMoreButton.styles'
import { ConfigProvider } from 'antd'
import { useTheme } from 'styled-components'

const SeeMoreButton = () => {
  const theme = useTheme()

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBorderColor: theme.colors.background.primary.color,
            defaultColor: theme.colors.background.primary.color,
            colorPrimaryHover: theme.colors.background.primary.shade1,
          },
        },
      }}
    >
      <AntDButton size="large" icon={<RightOutlined />}>
        See More
      </AntDButton>
    </ConfigProvider>
  )
}

export default SeeMoreButton
