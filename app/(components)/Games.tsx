import { GameCard } from "@/components";
import { CATEGORIES } from "@/db/categories";
import { games } from "@/db/games";

export default function Games() {
	return (
		<main className="container">
			<section
				aria-labelledby="games-category"
				className="flex flex-col gap-10 py-10"
			>
				{CATEGORIES.map((category) => {
					return (
						<div key={category} className="flex flex-col gap-5">
							<header>
								<h2 id="games-category" className="shadow-text">
									{category}
								</h2>
							</header>

							<ul className="grid grid-cols-7 gap-3">
								{games
									.filter((game) => game.category === category)
									.map((game, index) => (
										<GameCard game={game} key={index} />
									))}
							</ul>
						</div>
					);
				})}
			</section>
		</main>
	);
}
