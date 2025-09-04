export const getImageUrl = (path: string): string => {
	const baseUrl = process.env.IMAGE_BASE_URL || "/";

	return `${baseUrl}${path}`;
};
