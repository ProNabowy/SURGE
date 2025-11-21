"use client";
import useHeaderRoutes from "@/hooks/useHeaderRoutes";
import { Bars } from "@/icons";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal";

export default function Header() {
	const pathname = usePathname();

	const routes = useHeaderRoutes();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="container mx-auto py-10">
			<div className="flex items-center gap-5 justify-between">
				<Link href={"/"}>
					<Image src={logo} alt="Logo" width={150} height={50} />
				</Link>
				<ul className="hidden md:flex items-center gap-10 text-white font-medium">
					{routes.map((route, index) => {
						return (
							<li key={index}>
								<Link
									href={route.path}
									className={`font-semibold transition ${pathname === route.path ? "text-white" : "text-white/70 hover:text-white"} `}
								>
									{route.name}
								</Link>
							</li>
						);
					})}
				</ul>

				<button className="size-10 md:hidden" onClick={() => setIsOpen(true)}>
					<Bars fill="white" />
				</button>

				<Modal
					extraClassNames={{ overlay: "md:!hidden", modal: "md:!hidden" }}
					open={isOpen}
					onClose={() => setIsOpen(false)}
					anchor="right"
				>
					<ul className="py-10 flex flex-col gap-10">
						<li className="w-fit m-auto">
							<Link href={"/"}>
								<Image src={logo} alt="Logo" width={150} height={50} />
							</Link>
						</li>

						<ul className="flex flex-col gap-5">
							{routes.map((route, index) => {
								return (
									<li key={index}>
										<Link
											href={route.path}
											className={`font-semibold transition ${pathname === route.path ? "text-[#0182f5]" : "text-[#05122b]"} px-5`}
										>
											{route.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</ul>
				</Modal>
			</div>
		</header>
	);
}
