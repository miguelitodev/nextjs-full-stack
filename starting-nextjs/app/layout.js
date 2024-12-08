import "./globals.css";

export const metadata = {
	title: "Nextleve Food",
	description: "The place of your food",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
