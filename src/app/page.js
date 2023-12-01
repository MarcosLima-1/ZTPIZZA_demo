import Hero from './Pages/Hero/Hero';
import MenuHero from './Pages/Hero/MenuHero';

export default function Home() {
	return (
		<>
			<Hero />
			<MenuHero />

			<section className='center'>
				<div className='center flex_cl'>
					<div className='flex_cl'>
						<h2>Veja nosso</h2>
						<h1 className='title'>
							<span>Quem Somos</span>
						</h1>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores
						ratione consequuntur debitis voluptatum ipsa tempora officia? Eveniet
						rerum fuga laborum! Amet non recusandae tenetur excepturi ut magni beatae
						nam.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores
						ratione consequuntur debitis voluptatum ipsa tempora officia? Eveniet
						rerum fuga laborum! Amet non recusandae tenetur excepturi ut magni beatae
						nam.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores
						ratione consequuntur debitis voluptatum ipsa tempora officia? Eveniet
						rerum fuga laborum! Amet non recusandae tenetur excepturi ut magni beatae
						nam.
					</p>
				</div>
			</section>
			<section className='center'>
				<div className='center flex_cl'>
					<div className='flex_cl'>
						<h2>Nosso</h2>
						<h1 className='title'>
							<span>Contato</span>
						</h1>
					</div>
					<h2>+87 9988-90989</h2>
				</div>
			</section>
		</>
	);
}
