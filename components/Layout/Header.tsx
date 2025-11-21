import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
export default function Header() {
	return (
		<header className="container mx-auto py-10">
			<div className="flex items-center gap-5 justify-between">
				<Link href={"/"}>
					<Image src={logo} alt="Logo" width={150} height={50} />
				</Link>
				<ul className="flex items-center gap-10 text-white font-medium [&_a]:text-white [&_a]:font-semibold flex-1 justify-center">
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/games"}>Games</Link>
					</li>
					<li>
						<Link href={"/featured"}>Featured</Link>
					</li>
					<li>
						<Link href={"/favorites"}>Favorites</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
