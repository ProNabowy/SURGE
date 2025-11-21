import { Particles } from "@/components";
import dynamic from "next/dynamic";
const Filter = dynamic(() => import("./(components)/Filter"));
const Games = dynamic(() => import("./(components)/Games"));

export default function page() {
	return (
		<div className="flex flex-col gap-10">
			<Particles />

			<header className="flex flex-col gap-2">
				<h1
					className="text-3xl text-white font-bold text-center text-shadow-[0_0_20px_#79f9ff] uppercase"
					style={{
						transform:
							"perspective(5000px) rotateX(-9deg) rotateY(0.7deg) scale3d(1, 1, 1)",
						willChange: "transform",
						transformStyle: "preserve-3d",
					}}
				>
					games
				</h1>

				<p className="text-white/50 text-sm text-center capitalize">
					surge is leading broker of high quality cross-platform games. <br />
					All games are tested daily our editors. Live data: 35,220 HTML5 games
					and 29,545 Tutorials
				</p>
			</header>
			<Filter />

			<Games />
		</div>
	);
}
