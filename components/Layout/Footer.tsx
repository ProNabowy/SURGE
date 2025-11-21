export default function Footer() {
	return (
		<footer className="border-t border-gray-300 px-4 py-6 dark:border-gray-600">
			<p className="text-center text-sm font-medium capitalize text-white/60">
				© {new Date().getFullYear()} SURGE. All Rights Reserved.
			</p>
		</footer>
	);
}
