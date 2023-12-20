import FooterBar from "./FooterBar"
import NavBar from "./NavBar"

export default function PageTemplate(
    {
        children,
        pageType
    }: {
        children: React.ReactNode,
        pageType: "home" | "about" | "projects" | "experience" | "education"
    }
) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <nav>
                    <NavBar pageType={pageType}></NavBar>
                </nav>
                <main className="flex-grow">
                    {children}
                </main>
                <footer>
                    <FooterBar></FooterBar>
                </footer>
            </div>
        </>
    )
}