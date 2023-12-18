import Hero from './Pages/Hero/Hero';
import MenuHero from './Pages/Hero/MenuHero';
import TitleText from './Pages/Hero/TitleText';

export default function Home() {
	return (
		<>
			<Hero />
			<MenuHero />
			<TitleText
				tittle={'Quem Somos'}
				secTittle={'Veja'}
				text={
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae ad sapiente fuga veritatis rerum, nisi quasi cupiditate consectetur quibusdam facilis incidunt ipsam deleniti laudantium velit, laboriosam nobis atque enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae ad sapiente fuga veritatis rerum, nisi quasi cupiditate consectetur quibusdam facilis incidunt ipsam deleniti laudantium velit, laboriosam nobis atque enim!'
				}
			/>
			<TitleText
				tittle={'Contato'}
				secTittle={'Nosso'}
				text={'+87 9988-90989'}
			/>
		</>
	);
}
