import { GameCard } from "@/components";
import { games } from "@/db/games";

export default function page() {
	return (
		<main>
			<h3 className="text-center text-4xl font-semibold text-white mb-10">
				Favorites
			</h3>

			<ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 container">
				{games.map((game, index) => (
					<GameCard game={game} key={index} />
				))}
			</ul>
		</main>
	);
}
