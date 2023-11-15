import { TextProps } from '@/interfaces/TextProps'
import { TextItem, NextImage, AntButton, UpperContainer, LowerContainer } from './SingleText.style'
import { RightOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
import LanguageLevelIcon from '@/components/Reusable/LanguageLevelIcon/LanguageLevelIcon'

const SingleText = ({ title, snippet, image, imageAlt, level }: TextProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimaryHover: '#f5c33b',
          },
        },
      }}
    >
      <TextItem>
        <NextImage src={image} width={0} height={0} sizes="100vw" alt={imageAlt} />
        <UpperContainer>
          <h3>{title}</h3>
          <p>{snippet}</p>
        </UpperContainer>
        <LowerContainer>
          <AntButton icon={<RightOutlined />}>Start reading</AntButton>
          <LanguageLevelIcon level={level} width={48} height={48} />
        </LowerContainer>
      </TextItem>
    </ConfigProvider>
  )
}

export default SingleText
