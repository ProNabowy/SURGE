import { Home } from "@/icons";
import Link from "next/link";
import { BreadcrumbsProps } from "./types";

export default function Breadcrumbs({ routes }: BreadcrumbsProps) {
	return (
		<nav className="flex bg-white p-4 rounded-lg mb-5" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
				<li className="inline-flex items-center">
					<Link
						href={"/"}
						className="inline-flex items-center gap-1 text-sm font-semibold text-body hover:text-fg-brand"
					>
						<Home />
						Home
					</Link>
				</li>
				{routes.map((route, index) => {
					return (
						<li key={index} aria-current="page">
							<div className="flex items-center space-x-1.5">
								<svg
									className="w-3.5 h-3.5 rtl:rotate-180 text-body"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m9 5 7 7-7 7"
									/>
								</svg>
								<span className="inline-flex items-center text-sm font-semibold text-body-subtle">
									{route}
								</span>
							</div>
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
