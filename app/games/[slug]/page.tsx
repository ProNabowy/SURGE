import { GameCard } from "@/components";
import { games } from "@/db/games";
import { Carystel as Crystal } from "@/icons";

import dynamic from "next/dynamic";

const GameIframe = dynamic(() => import("./(components)/GameIframe"));
const Embed = dynamic(() => import("./(components)/Embed"));

export default async function page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const game = games.find((game) => game.id === slug);

	const similar = games
		.filter((game) => game.category === game.category)
		.slice(0, 10);

	try {
		if (!game) throw new Error("Game not found");

		return (
			<main className="grid grid-cols-12 gap-5 container">
				<section className="flex flex-col gap-5 col-span-12 lg:col-span-7 xl:col-span-9">
					<GameIframe slug={slug} />

					<main className="bg-[#f6f6f6] rounded-lg">
						<div className="flex items-center justify-between px-5 border-b border-b-gray-300 py-3">
							<div className="flex items-center gap-4">
								<button className="rounded-full border border-[#3b21cc] text-[#3b21cc] py-1 px-4 text-sm font-semibold">
									Share
								</button>
								<button className="rounded-full border border-[#3b21cc] text-[#3b21cc] py-1 px-4 text-sm font-semibold">
									Open in a new tab
								</button>
							</div>
							<Crystal />
						</div>
						<div className="px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-gray-600">
								Game Title: {game.title}
							</p>
						</div>
						<div className="px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-gray-600">
								Published by: {game.company}
							</p>
						</div>
						<div className=" px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-gray-600">
								Language: English
							</p>
						</div>
						<div className=" px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-gray-600">
								Category: {game.category}
							</p>
						</div>
						<div className="flex flex-col gap-3 px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-[#3b21cc]">
								DESCRIPTION
							</p>

							<p className="text-sm font-semibold text-gray-500">
								Build your superhero empire and dominate the battlefield! In
								Super Hero Tycoon, choose from iconic heroes like Iron Man,
								Spider-Man, or The Hulk, and construct your base to generate
								income, unlock powerful gear, and engage in thrilling PvP
								combat. With over 2 billion visits, this game offers an
								immersive experience for fans of superheroes and tycoon-style
								gameplay.
							</p>
						</div>
						<div className="flex flex-col gap-3 px-5 border-b border-b-gray-300 py-3">
							<p className="text-sm font-semibold text-[#3b21cc]">
								INSTRUCTIONS
							</p>

							<p className="text-sm font-semibold text-gray-500">
								1. Select Your Hero: Choose a superhero-themed base to begin
								your journey. Build Your 2. Base: Purchase droppers and
								upgraders to generate and collect cash. 3. Upgrade and Expand:
								Use your earnings to unlock new rooms, gear, and abilities. 4.
								Engage in Combat: Utilize your superhero powers and weapons to
								battle other players. 5. Collect Crates: Grab falling cash
								crates for bonus rewards and boost your progress.
							</p>
						</div>
					</main>

					<Embed />
				</section>
				<section className="col-span-12 lg:col-span-5 xl:col-span-3 rounded-lg flex flex-col gap-5">
					<p className="text-2xl font-semibold text-white">Similar Games</p>

					<div className="grid grid-cols-2 gap-5">
						{similar.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</div>
				</section>
			</main>
		);
	} catch (error) {
		return (
			<main className="flex flex-col gap-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="text-5xl font-semibold text-white">Game not found</p>
			</main>
		);
	}
}
