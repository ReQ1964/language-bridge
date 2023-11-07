import S from './Hero.styles';
import hero_online_studying from '@/public/images/home/hero_online_studying.png';
import { useRouter } from 'next/router';

const Hero = () => {
	const router = useRouter();

	const goToLoginPage = () => router.push('/account');

	return (
		<S.HeroSection>
			<h1>Studying Online is now much easier</h1>
			<p>Learn everyday language in context. Let's connect and bridge the gap!</p>
			<S.Button onClick={goToLoginPage}>Login</S.Button>
			<S.NextImage
				src={hero_online_studying}
				height={100}
				width={100}
				unoptimized
				alt="Two people talking online"
			/>
		</S.HeroSection>
	);
};

export default Hero;
