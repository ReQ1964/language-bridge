import { HeroSection, Button, NextImage } from './Hero.styles'
import hero_online_studying from '@/public/images/home/hero_online_studying.png'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()

  const goToLoginPage = () => router.push('/account')

  return (
    <HeroSection>
      <h1>Studying Online is now much easier</h1>
      <p>Learn everyday language in context. Let&apos;s connect and bridge the gap!</p>
      <Button onClick={goToLoginPage}>Login</Button>
      <NextImage
        src={hero_online_studying}
        height={100}
        width={100}
        unoptimized
        alt="Two people talking online"
      />
    </HeroSection>
  )
}

export default Hero
