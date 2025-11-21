"use client";

import default_bg from "@/public/images/default_game.jpg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function GameImageContainer({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) {
	const [image, setImage] = useState<string | StaticImageData>(src);

	return (
		<figure>
			<Image
				src={`https://img.gamedistribution.com/${image}`}
				alt={alt}
				onError={() => setImage(default_bg)}
				width={165}
				loading="lazy"
				height={123}
				className="w-full h-[123px] object-cover rounded-md"
			/>
		</figure>
	);
}
