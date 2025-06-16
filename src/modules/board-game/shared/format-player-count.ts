export const formatPlayerCount = (min: number, max: number): string =>
	min === max ? `${max}` : `${min} - ${max}`;
