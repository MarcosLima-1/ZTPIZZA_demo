export default function TitleText({tittle, secTittle, text}) {
	return (
		<section className='center'>
			<div className='center flex_cl'>
				<div className='flex_cl'>
					<h2>{secTittle}</h2>
					<h1 className='title'>
						<span>{tittle}</span>
					</h1>
				</div>
				<p>
                    {text}
				</p>
			</div>
		</section>
	);
}
