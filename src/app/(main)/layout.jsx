import Footer from "@/components/shared/Footer";

export default function MainLayout ({children}) {
    return (
        <section>
            {children}
            <Footer />
        </section>
    )
}