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

	return (
		<figure>
			<Image
				src={
					imageHasError
						? defaultImage
						: `https://img.gamedistribution.com/${src}`
				}
				alt={alt}
				onError={() => setIsImageHasError(true)}
				width={165}
				loading="lazy"
				height={123}
				className="w-full h-[123px] object-cover rounded-md"
			/>
		</figure>
	);
}
