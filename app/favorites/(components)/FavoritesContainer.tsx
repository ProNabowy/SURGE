"use client";
import dynamic from "next/dynamic";

const GameCard = dynamic(() => import("@/components/GameCard"));

import { Game } from "@/components/types";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FavoritesContainer() {
	const [favorites, setFavorites] = useState<Game[]>([]);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const stored = JSON.parse(localStorage.getItem("favorites") || "[]");

		setFavorites(stored);

		return () => {};
	}, []);

	if (!favorites.length)
		return (
			<div className="flex flex-col items-center justify-center gap-5 my-10">
				<h3 className="text-4xl text-white font-bold text-center">
					No Data Found
				</h3>

				<Link
					href={"/"}
					className="capitalize bg-[#8000ff] transition shadow-[0_0_50px_#9832fd] text-white py-2 px-5 rounded-lg w-fit"
				>
					Back to home page
				</Link>
			</div>
		);
	return (
		<ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 container">
			{favorites.map((game, index) => (
				<GameCard game={game} key={index} />
			))}
		</ul>
	);
}
