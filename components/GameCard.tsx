import bg from "@/public/images/default_game.jpg";
import Image from "next/image";
import Link from "next/link";

export default function GameCard() {
	return (
		<li>
			<article>
				<Link href="/" className="flex flex-col gap-1">
					<figure>
						<Image
							src={bg}
							alt="Game thumbnail"
							width={165}
							height={123}
							className="w-full h-[123px] object-cover rounded-md"
						/>
					</figure>

					<h3 className="font-bold text-white line-clamp-1">
						Drop Stack Ball Game
					</h3>

					<div className="flex items-center gap-2">
						<p className="text-xs text-white/60">By</p>

						<p
							className="text-[#00b2ff] font-bold bg-[#ffffff1a] text-xs px-1 rounded-sm"
							style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
						>
							JellyLab
						</p>
					</div>
				</Link>
			</article>
		</li>
	);
}
