"use client";
import { CATEGORIES } from "@/db/categories";
import useFilter from "@/hooks/useFilter";
import { appConstants } from "@/utils/helpers/constants";

export default function Filter() {
	const { currentCategory, onSearch, onCategoryChange, searchQuery } =
		useFilter();

	return (
		<section className="container flex flex-col gap-5">
			<div className="flex items-center justify-center gap-4 flex-wrap md:max-w-[500px] m-auto">
				{[appConstants.CATEGORIES_ALL_KEY, ...CATEGORIES].map((category) => {
					return (
						<button
							onClick={() => onCategoryChange(category)}
							key={category}
							className={`${currentCategory === category ? "bg-[#ff2c9c]" : "bg-[#8000ff]"} transition shadow-[0_0_50px_#9832fd] flex-1 text-white py-2 px-5 rounded-lg`}
						>
							{category}
						</button>
					);
				})}
			</div>

			<input
				type="search"
				className="w-full sm:w-[500px] border border-gray-400 rounded-lg p-2 placeholder:text-gray-400 bg-white m-auto"
				placeholder="Search By Name"
				name="name"
				value={searchQuery}
				onChange={onSearch}
				id="name"
			/>
		</section>
	);
}
