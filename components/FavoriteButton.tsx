"use client";
import { FilledHeart, Heart } from "@/icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Game } from "./types";

export default function FavoriteButton({ game }: { game: Game }) {
	const [isFavorite, setIsFavorite] = useState(false);

	const notify = (message: string) =>
		toast(message, {
			position: "top-center",
			autoClose: 2000,
		});

	// check if game exists in favorites
	useEffect(() => {
		const stored: Game[] = JSON.parse(
			localStorage.getItem("favorites") || "[]"
		);

		setIsFavorite(stored.some((item: Game) => item.id === game.id));
	}, [game.id]);

	const handleClick = () => {
		const stored: Game[] = JSON.parse(
			localStorage.getItem("favorites") || "[]"
		);

		let updated: Game[];

		// Remove card from favorites
		if (stored.some((item: Game) => item.id === game.id)) {
			updated = stored.filter((item: Game) => item.id !== game.id);

			notify("Game Removed from favorites");
			setIsFavorite(false);
		} else {
			// Add card
			updated = [...stored, game];

			notify("Game Added to favorites");
			setIsFavorite(true);
		}

		localStorage.setItem("favorites", JSON.stringify(updated));
	};

	return (
		<button
			onClick={handleClick}
			className="absolute right-2 top-2 z-10 transition bg-[#99a1af94] hover:bg-white shadow-lg flex items-center justify-center rounded-full size-10"
		>
			{isFavorite ? <FilledHeart /> : <Heart />}
		</button>
	);
}
