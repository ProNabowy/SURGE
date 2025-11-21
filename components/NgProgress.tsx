import NextTopLoader from "nextjs-toploader";

function NgProgress() {
	return (
		<NextTopLoader
			color={"#2d69b4"}
			height={4}
			speed={100}
			showSpinner={false}
			shadow={`0 0 10px ${"#1e4678"},0 0 5px ${"#1e4678"}`}
		/>
	);
}

export default NgProgress;
