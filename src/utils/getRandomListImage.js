export default async () => {
	const { uri } = await fetch("https://picsum.photos/1920/600");
	return uri
}