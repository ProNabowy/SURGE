import { GameCard } from "@/components";

export default function Games() {
	const games = Array.from({ length: 14 });

	return (
		<main className="container">
			<section aria-labelledby="games-category" className="flex flex-col gap-10 py-10">
				<div className="flex flex-col gap-5">
					<header>
						<h2 id="games-category" className="shadow-text">
							CATEGORY
						</h2>
					</header>

					<ul className="grid grid-cols-7 gap-3">
						{games.map((_, index) => (
							<GameCard key={index} />
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<header>
						<h2 id="games-category" className="shadow-text">
							CATEGORY
						</h2>
					</header>

					<ul className="grid grid-cols-7 gap-3">
						{games.map((_, index) => (
							<GameCard key={index} />
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<header>
						<h2 id="games-category" className="shadow-text">
							CATEGORY
						</h2>
					</header>

					<ul className="grid grid-cols-7 gap-3">
						{games.map((_, index) => (
							<GameCard key={index} />
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<header>
						<h2 id="games-category" className="shadow-text">
							CATEGORY
						</h2>
					</header>

					<ul className="grid grid-cols-7 gap-3">
						{games.map((_, index) => (
							<GameCard key={index} />
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<header>
						<h2 id="games-category" className="shadow-text">
							CATEGORY
						</h2>
					</header>

					<ul className="grid grid-cols-7 gap-3">
						{games.map((_, index) => (
							<GameCard key={index} />
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
