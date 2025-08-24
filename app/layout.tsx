import "./globals.css"

export const metadata = {
    title: "Event-IN - CodeOlympics",
    description: "Coding competition event details",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="antialiased">{children}</body>
        </html>
    )
}
