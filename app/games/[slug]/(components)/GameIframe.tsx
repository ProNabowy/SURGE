"use client";
import { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function GameIframe({ slug }: { slug: string }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	const src = `https://html5.gamedistribution.com/${slug}/?gd_sdk_referrer_url=${typeof window !== "undefined" ? window.location.href : "https://www.example.com"}`;

	const handleFullScreen = () => {
		const iframe = iframeRef.current;
		if (iframe && iframe.requestFullscreen) iframe.requestFullscreen();
	};

	const handleShare = () => {
		if (typeof navigator !== "undefined" && navigator.clipboard) {
			try {
				navigator.clipboard.writeText(window.location.href);
				toast("Link copied to clipboard", { position: "bottom-right", autoClose: 2000 });
			} catch (e) {
				toast("Unable to copy link", { position: "bottom-right", autoClose: 2000 });
			}
		}
	};

	const handleOpen = () => {
		if (typeof window !== "undefined") window.open(src, "_blank");
	};

	useEffect(() => {
		const t = setTimeout(() => {
			if (loading) setError(true);
		}, 15000);

		return () => clearTimeout(t);
	}, [loading]);

	const handleRetry = () => {
		setError(false);
		setLoading(true);
		if (iframeRef.current) iframeRef.current.src = src;
	};

	return (
		<div className="w-full flex items-center justify-center">
			<div className="border border-gray-500 rounded-lg overflow-hidden relative w-full">
				<div className="absolute top-3 left-3 z-20 flex items-center gap-2">
					<button
						onClick={handleShare}
						className="rounded-full border border-[#3b21cc] text-[#3b21cc] py-1 px-3 text-sm font-semibold bg-white/80"
					>
						Share
					</button>

					<button
						onClick={handleOpen}
						className="rounded-full border border-[#3b21cc] text-[#3b21cc] py-1 px-3 text-sm font-semibold bg-white/80"
					>
						Open in new tab
					</button>
				</div>

				<button
					onClick={handleFullScreen}
					className="absolute top-3 right-3 z-20 bg-black/60 text-white px-3 py-1 rounded hover:bg-black/80 transition"
				>
					Fullscreen
				</button>

				{(loading || error) && (
					<div className="absolute inset-0 animate-pulse bg-gray-800 flex items-center justify-center z-10">
						<div className="w-3/4 h-3/4 bg-gray-700 rounded-lg flex items-center justify-center">
							{error ? (
								<div className="text-center text-white">
									<p className="mb-3">Failed to load the game.</p>
									<button
										onClick={handleRetry}
										className="bg-[#ff2c9c] rounded px-3 py-1 text-sm font-semibold"
									>
										Retry
									</button>
								</div>
							) : (
								<div className="w-full h-full" />
							)}
						</div>
					</div>
				)}

				<div className="relative w-full" style={{ paddingTop: "56.25%" }}>
					<iframe
						ref={iframeRef}
						src={src}
						className="absolute inset-0 w-full h-full"
						scrolling="none"
						allowFullScreen
						onLoad={() => {
							setLoading(false);
							setError(false);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
