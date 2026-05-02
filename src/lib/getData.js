export default async function getData() {
    const res = await fetch("http://localhost:3000/tiles.json");
    const data = await res.json();

    return data;
}