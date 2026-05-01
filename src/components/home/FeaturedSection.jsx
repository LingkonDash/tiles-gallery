export default async function FeaturedSection() {

    const res = await fetch('http://localhost:3000/tiles.json')
    const data = await res.json();

    console.log(data)

    return (
        <section className="h-screen">

        </section>
    )
}