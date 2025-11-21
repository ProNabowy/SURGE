"use client";

import CanvasParticles from "canvasparticles-js";
import { useEffect, useRef } from "react";

export default function Particles() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const particles = new CanvasParticles(canvasRef.current, {
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

		particles.start();

		return () => {
			particles.destroy();
		};
	}, []);

	return (
		<div
			className="h-screen w-screen bg-[#05122b] bg-no-repeat absolute inset-0 overflow-hidden z-[-1]"
			style={{
				backgroundImage:
					"radial-gradient(circle 50vw at 100% 0,#00fefe,transparent),radial-gradient(circle 50vw at 20% 25vw,#9b00cc,transparent),linear-gradient(180deg,#3f007e,#502cba 25vw,#05122b 50vw)",
			}}
		>
			<canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
		</div>
	);
}
