import {
  FooterSection,
  ContactContainer,
  SocialsContainer,
  TermsAndConditionsContainer,
  BottomContainer,
} from './Footer.styles'
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  MobileOutlined,
  MailOutlined,
  PushpinOutlined,
} from '@ant-design/icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterSection>
      <ContactContainer>
        <h3>Contact Information</h3>
        <a href="tel:+48523453331">
          <MobileOutlined />
          <p>+48 523453331</p>
        </a>
        <a href="mailto:info@languagebridge">
          <MailOutlined />
          <p>info@languagebridge</p>
        </a>

        <a href="https://www.google.com/maps/place/Home+of+Rick+Astley/@25.2510383,55.2913498,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f4341e7c63383:0x43aca9dcb43e99b!8m2!3d25.2510335!4d55.2962207!16s%2Fg%2F11sckmxqs1?hl=pl&entry=ttu">
          <PushpinOutlined />
          <p>Warsaw, Rick Astley Street</p>
        </a>
      </ContactContainer>
      <SocialsContainer>
        <a href="https://facebook.com" data-testid="facebook-icon">
          <FacebookFilled />
        </a>
        <a href="https://linkedin.com" data-testid="linkedin-icon">
          <LinkedinFilled />
        </a>
        <a href="https://twitter.com" data-testid="twitter-icon">
          <TwitterSquareFilled />
        </a>
      </SocialsContainer>

      <BottomContainer>
        <p>2023 Language Bridge. All Rights Reserved</p>
        <TermsAndConditionsContainer>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/policy">Privacy Policy</Link>
        </TermsAndConditionsContainer>
      </BottomContainer>
    </FooterSection>
  )
}

export default Footer
