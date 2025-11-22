"use client";

import Image from "next/image";
import { useState } from "react";
import defaultImage from "../public/images/default_game.jpg";

export default function GameImageContainer({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) {
	const [imageHasError, setIsImageHasError] = useState<boolean>(false);

	const [loading, setLoading] = useState<boolean>(true);

	const onErrorHandler = () => {
		setIsImageHasError(true);
		setLoading(false);
	};

	return (
		<figure className="relative w-full h-[123px] overflow-hidden rounded-md">
			{loading && (
				<div className="absolute inset-0 bg-gray-700/50 animate-pulse rounded-md" />
			)}

			<Image
				src={
					imageHasError
						? defaultImage
						: `https://img.gamedistribution.com/${src}`
				}
				alt={alt}
				onLoad={() => setLoading(false)}
				onError={onErrorHandler}
				width={165}
				loading="lazy"
				height={123}
				className="w-full h-[123px] object-cover rounded-md transition hover:scale-120"
			/>
		</figure>
	);
}
