export default function Filter() {
	return (
		<section className="container flex flex-col gap-5">
			<div className="flex items-center justify-center gap-4 flex-wrap">
				<button className="bg-[#8000ff] shadow-[0_0_50px_#9832fd] text-white py-2 px-5 rounded-lg">
					Editor's Picks
				</button>
				<button className="bg-[#8000ff] shadow-[0_0_50px_#9832fd] text-white py-2 px-5 rounded-lg">
					Editor's Picks
				</button>
				<button className="bg-[#8000ff] shadow-[0_0_50px_#9832fd] text-white py-2 px-5 rounded-lg">
					Editor's Picks
				</button>
				<button className="bg-[#8000ff] shadow-[0_0_50px_#9832fd] text-white py-2 px-5 rounded-lg">
					Editor's Picks
				</button>
			</div>

			<input
				type="search"
				className="w-[500px] border border-gray-400 rounded-lg p-2 placeholder:text-gray-400 bg-white m-auto"
				placeholder="Search By Name"
				name=""
				id=""
			/>
		</section>
	);
}
