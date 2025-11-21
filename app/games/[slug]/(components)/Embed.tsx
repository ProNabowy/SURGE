"use client";

import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function Embed() {
	const { slug } = useParams();

	const url = `https://html5.gamedistribution.com/${slug}/?gd_sdk_referrer_url=https://gamedistribution.com/games/super-hero-tycoon/`;

	const iframe = `<iframe src="https://html5.gamedistribution.com/${slug}/?gd_sdk_referrer_url=https://www.example.com/games/{game-path}" width="800" height="600" scrolling="none" frameborder="0"></iframe>`;

	const notify = () =>
		toast("Copied", {
			position: "top-center",
			autoClose: 5000,
		});

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);

		notify();
	};

	return (
		<main className="bg-[#f6f6f6] rounded-lg">
			<div className="flex flex-col gap-3 px-5 border-b border-b-gray-300 py-3">
				<p className="text-sm font-semibold text-[#3b21cc]">EMBED</p>

				<div className="flex items-center gap-2 rounded-full">
					<div className="p-2 bg-gray-300 rounded-full max-w-full overflow-hidden flex-1">
						<p className="flex-1 line-clamp-1 text-sm text-gray-800">
							{iframe}
						</p>
					</div>

					<button
						onClick={() => copyToClipboard(iframe)}
						className="rounded-full bg-[#3b21cc] text-white font-semibold text-sm p-2"
					>
						Copy
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-3 px-5 border-b py-3">
				<p className="text-sm font-semibold text-[#3b21cc]">EXAMPLE URL</p>

				<div className="flex items-center gap-2 rounded-full">
					<div className="p-2 bg-gray-300 rounded-full max-w-full overflow-hidden flex-1">
						<p className="flex-1 line-clamp-1 text-sm text-gray-800">{url}</p>
					</div>

					<button
						onClick={() => copyToClipboard(url)}
						className="rounded-full bg-[#3b21cc] text-white font-semibold text-sm p-2"
					>
						Copy
					</button>
				</div>
			</div>
		</main>
	);
}
