import Link from "next/link";
import GameImageContainer from "./GameImageContainer";
import { Game } from "./types";

export default function GameCard({ game }: { game: Game }) {
	return (
		<li>
			<article>
				<Link href={`/games/${game.id}`} className="flex flex-col gap-1">
					<GameImageContainer alt={game.title} src={game.assets[0]} />

					<h3 className="font-bold text-white line-clamp-1">{game.title}</h3>

					<div className="flex items-center gap-2">
						<p className="text-xs text-white/60">Category</p>

						<p
							className="text-[#00b2ff] font-bold bg-[#ffffff1a] text-xs px-1 rounded-sm line-clamp-1"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						>
							{game.category}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="text-xs text-white/60">By</p>

						<p
							className="text-[#00b2ff] font-bold bg-[#ffffff1a] text-xs px-1 rounded-sm line-clamp-1"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						>
							{game.company}
						</p>
					</div>
				</Link>
			</article>
		</li>
	);
}
