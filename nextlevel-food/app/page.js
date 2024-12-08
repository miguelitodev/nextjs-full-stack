import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
	return (
		<>
			<Header />
			<p>
				<Link href="/about">about us</Link>
			</p>
		</>
	);
}
