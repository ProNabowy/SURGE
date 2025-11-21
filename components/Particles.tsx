"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvasEl = canvasRef.current;
		if (!canvasEl) return;

		let particlesInstance: any = null;

		(async () => {
			const mod = await import("canvasparticles-js");
			const CanvasParticles = mod?.default ?? mod;

			particlesInstance = new CanvasParticles(canvasEl, {
				background: "transparent",

				particles: {
					color: "#5ea7de",
					relSize: 1,
					relSpeed: 0.2,
					max: 150,
					connectDistance: 400,
				},
				mouse: {
					interactionType: 0,
				},
			});

			particlesInstance.start();
		})();

		return () => {
			try {
				particlesInstance?.destroy?.();
			} catch (e) {}
		};
	}, []);

	return (
		<div
			className="h-screen w-screen bg-[#05122b] bg-no-repeat fixed inset-0 overflow-hidden z-[-1]"
			style={{
				backgroundImage:
					"radial-gradient(circle 50vw at 100% 0,#00fefe,transparent),radial-gradient(circle 50vw at 20% 25vw,#9b00cc,transparent),linear-gradient(180deg,#3f007e,#502cba 25vw,#05122b 50vw)",
			}}
		>
			<canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
		</div>
	);
}
