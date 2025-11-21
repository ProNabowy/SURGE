"use client";
import { useRef, useState } from "react";

export default function GameIframe({ slug }: { slug: string }) {
	const [loading, setLoading] = useState(true);

	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	const handleFullScreen = () => {
		const iframe = iframeRef.current;
		if (iframe) {
			if (iframe.requestFullscreen) iframe.requestFullscreen();
		}
	};

	return (
		<div className="w-full flex items-center justify-center">
			<div className="border border-gray-500 rounded-lg overflow-hidden relative w-full">
				<button
					onClick={handleFullScreen}
					className="absolute top-3 right-3 z-20 bg-black/60 text-white px-3 py-1 rounded hover:bg-black/80 transition"
				>
					Fullscreen
				</button>

				{loading && (
					<div className="absolute inset-0 animate-pulse bg-gray-800 flex items-center justify-center z-10">
						<div className="w-3/4 h-3/4 bg-gray-700 rounded-lg"></div>
					</div>
				)}

				<iframe
					ref={iframeRef}
					src="https://html5.gamedistribution.com/e5e957d23d1247b48a4a9a315fc96249"
					className="w-full h-[300px] sm:h-[600px]"
					scrolling="none"
					allowFullScreen
					onLoad={() => setLoading(false)}
				/>
			</div>
		</div>
	);
}
