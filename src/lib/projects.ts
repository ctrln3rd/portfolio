export type Project = {
	id: string;
	title: string;
	date: string;
	description: string;
	images?: string[];
	link?: string;
};

export const projects: Project[] = [
	{
		id: '001',
		title: 'Vitals Widget',
		description:
			'view cpu usage, ram , gpu and tempearature anywhere on your desktop.An extension For linux gnome users version 45+. Has various settings to help you style it the way you want. Built with typescript and xml and complied to javascript',
		images: ['vitals-widget', 'vitals-widget1', 'vitals-widget2'],
		date: 'dec, 2025',
		link: 'https://extensions.gnome.org/extension/9072/vitals-widget/'
	}
];
