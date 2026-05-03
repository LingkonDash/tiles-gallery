export default async function getData() {

    const res = await fetch("https://tiles-gallery-lingkon.vercel.app/tiles.json");
    const data = await res.json();

    return data;
}