export interface IPInfos {
	ip: string;
	location: Location;
	isp: string;
}

export interface Location {
	country: string;
	city: string;
	postalCode: number;
	timezone: string;
	lat: number;
	lng: number;
}

export default async function getInfos(ip: string): Promise<IPInfos> {
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_VTsh2by2aTqy0oL0JD0P3TIJeHAUP&ipAddress=${ip}`
	);
	if (!response.ok) {
		throw new Error('Failed to fetch IP information');
	}
	const data = await response.json();
	return data;
}
