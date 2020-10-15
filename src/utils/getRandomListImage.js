export default async () => {
	const { url } = await fetch("https://picsum.photos/1920/600");
	return url
}