export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <body >
            <nav>
                {children}
            </nav>
        </body>
    );
}