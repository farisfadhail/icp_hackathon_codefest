import Title from "../Components/atoms/Title";
import MainLayout from "../Layouts/MainLayout";

const Landing = () => {
	return (
		<MainLayout>
			<article id="home" className="h-[calc(100vh-6rem)] flex flex-col justify-center space-y-12">
				<div className="w-4/5 mx-auto pl-8 border-l-8 border-white">
					<h1 className="font-bold text-[4rem] text-white leading-tight">
						Empower Your <span className="text-yellow-500">Investments</span>: <br /> Own <span className="text-yellow-500">Crypto</span> Shares in Companies
					</h1>
					<h3 className="text-white text-2xl">Discover a new era of investment with our app, where you can invest in companies by purchasing crypto tokens instead of traditional stock shares.</h3>
				</div>
				<a href="#about" className="animate-pulse font-thin w-fit mx-auto text-xl text-white flex flex-col justify-center items-center">
					Explore Us!
					<svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 24 24">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5" />
					</svg>
				</a>
			</article>
			<article id="about" className="min-h-screen flex items-center">
				<div>
					<Title>
						What Is Join<span className="text-yellow-500">Vest</span>
					</Title>
					<div className="my-12 w-5/6 mx-auto">
						<div>
							<p className="text-white text-2xl text-center">
								Selamat datang di JoinVest, platform investasi masa depan yang mengintegrasikan kekuatan teknologi Web3 untuk menghadirkan pengalaman investasi yang aman, transparan, dan global. Kami berdedikasi untuk
								memberikan solusi investasi inovatif yang memungkinkan Anda untuk memanfaatkan potensi besar dari ekosistem blockchain.
							</p>
						</div>
						<div className="relative mt-96">
							<img src="/assets/building-asset.svg" className="absolute w-96 -z-[1] -top-72 right-0" />
							<img src="/assets/building-asset-2.svg" className="absolute w-96 -z-[1] -top-80 left-0" />
							<img src="/assets/building-asset-3.svg" className="absolute w-72 -z-[1] -top-72 left-56" />
							<img src="/assets/building-asset-4.svg" className="absolute w-72 -z-[1] -top-72 right-80" />
							<div className="rounded-md p-6 bg-indigo-900 border-2 border-indigo-700 flex justify-around">
								<div className="text-center">
									<p className="font-bold text-8xl text-white">150+</p>
									<p className="text-yellow-500 font-semibold text-2xl">Companies</p>
								</div>
								<div className="text-center">
									<p className="font-bold text-8xl text-white">150+</p>
									<p className="text-yellow-500 font-semibold text-2xl">Coins</p>
								</div>
								<div className="text-center">
									<p className="font-bold text-8xl text-white">150+</p>
									<p className="text-yellow-500 font-semibold text-2xl">Users</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="my-12 grid grid-cols-3 w-5/6 mx-auto gap-12">
            <div className="col-span-2">
              <p className="text-white text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime impedit molestiae blanditiis iure odio repellat autem mollitia, cum ex laudantium doloremque alias totam atque accusamus, nesciunt similique sequi consequatur
                cumque necessitatibus facere ratione. Mollitia facere animi eaque repellat voluptate inventore.
              </p>
            </div>
            <div className="col-span-1">
              <div className="rounded-md p-6 bg-indigo-900 bg-opacity-80 border-2 border-indigo-700 grid grid-cols-1 gap-8">
                <div className="text-center">
                  <p className="font-bold text-8xl text-white">150+</p>
                  <p className="text-yellow-500 font-semibold text-2xl">Companies</p>
                </div>
                <div className="w-4/5 mx-auto h-0.5 bg-white"></div>
                <div className="text-center">
                  <p className="font-bold text-8xl text-white">150+</p>
                  <p className="text-yellow-500 font-semibold text-2xl">Coins</p>
                </div>
              </div>
            </div>
          </div> */}
				</div>
			</article>
			<article id="work" className="min-h-screen flex items-center">
				<div>
					<Title>
						How It <span className="text-yellow-500">Works</span>
					</Title>
					<div className="grid grid-cols-2 w-4/5 mx-auto gap-8 my-12">
						{/* Card 1 */}
						<div className="rounded-md p-6 bg-indigo-900 bg-opacity-80 border-2 border-indigo-700 flex gap-6 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 text-white p-1.5 border-2 border-white rounded-full" viewBox="0 0 24 24">
								<g fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="6" r="4" />
									<path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
								</g>
							</svg>
							<div>
								<h4 className="font-semibold text-white text-xl">Lorem ipsum dolor sit.</h4>
								<p className="text-white font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae similique dolore voluptatem temporibus esse sit quam optio fugit reprehenderit!</p>
							</div>
						</div>
						{/* Card 2 */}
						<div className="rounded-md p-6 bg-indigo-900 bg-opacity-80 border-2 border-indigo-700 flex gap-6 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 text-white p-1.5 border-2 border-white rounded-full" viewBox="0 0 24 24">
								<g fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="6" r="4" />
									<path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
								</g>
							</svg>
							<div>
								<h4 className="font-semibold text-white text-xl">Lorem ipsum dolor sit.</h4>
								<p className="text-white font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae similique dolore voluptatem temporibus esse sit quam optio fugit reprehenderit!</p>
							</div>
						</div>
						{/* Card 3 */}
						<div className="rounded-md p-6 bg-indigo-900 bg-opacity-80 border-2 border-indigo-700 flex gap-6 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 text-white p-1.5 border-2 border-white rounded-full" viewBox="0 0 24 24">
								<g fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="6" r="4" />
									<path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
								</g>
							</svg>
							<div>
								<h4 className="font-semibold text-white text-xl">Lorem ipsum dolor sit.</h4>
								<p className="text-white font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae similique dolore voluptatem temporibus esse sit quam optio fugit reprehenderit!</p>
							</div>
						</div>
						{/* Card 4 */}
						<div className="rounded-md p-6 bg-indigo-900 bg-opacity-80 border-2 border-indigo-700 flex gap-6 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-20 text-white p-1.5 border-2 border-white rounded-full" viewBox="0 0 24 24">
								<g fill="none" stroke="currentColor" stroke-width="1.5">
									<circle cx="12" cy="6" r="4" />
									<path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
								</g>
							</svg>
							<div>
								<h4 className="font-semibold text-white text-xl">Lorem ipsum dolor sit.</h4>
								<p className="text-white font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae similique dolore voluptatem temporibus esse sit quam optio fugit reprehenderit!</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</MainLayout>
	);
};

export default Landing;
