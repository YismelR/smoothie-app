/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { MenubarDemo } from "./MenubarDemo";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

export default function Component() {
	return (
		<header className="flex h-20 shrink-0 items-center md:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button className="md-tablet:hidden" size="icon" variant="outline">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<Link className="mr-6 hidden lg:flex" to="#">
						<MountainIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</Link>
					<div className="flex flex-col h-full gap-2 py-6">
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold"
							to="#"
						>
							Home
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold"
							to="#"
						>
							Bowls
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold"
							to="#"
						>
							About
						</Link>
						<Link
							className="flex w-full items-center py-2 text-lg font-semibold"
							to="#"
						>
							Contact Us
						</Link>
					</div>
					<div className="flex gap-4 justify-end ">
						<img
							src={facebook}
							alt="facebook"
							className="lg-desktop:w-8 md-desktop:w-6"
						/>
						<img
							src={twitter}
							alt="twitter"
							className="lg-desktop:w-8 md-desktop:w-6"
						/>
						<img
							src={instagram}
							alt="instagram"
							className="lg-desktop:w-8 md-desktop:w-6"
						/>
					</div>
				</SheetContent>
			</Sheet>
			<Link className="mr-6 hidden lg:flex" to="#">
				<MountainIcon className="h-6 w-6" />
				<span className="sr-only">Acme Inc</span>
			</Link>
			<nav className=" hidden md-tablet:flex">
				<MenubarDemo />
			</nav>
		</header>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
