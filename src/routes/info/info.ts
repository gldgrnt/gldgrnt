import type { LocalisedText } from '#lib/utils/localisation.ts';

export interface InfoSection {
	title: LocalisedText;
	favourites: string[];
}

export const info: InfoSection[] = [
	{
		title: {
			en: 'Music:',
			fr: 'Musique :',
			jp: '音楽：'
		},
		favourites: [
			'Young Hearts - Benny Sings',
			'Fudge - Michael Kiwanuka',
			'Mercy - Armand Hammer',
			'藤子 - 野口文',
			'What For? - Toro y Moi',
			'In Our Nature - José Gonzales',
			'The Pines - joshua bonnetta'
		]
	},
	{
		title: {
			en: 'Films:',
			fr: 'Films :',
			jp: '映画：'
		},
		favourites: [
			'Tenet',
			'Spider-Man: Across The Spider-Verse',
			'Perfect Blue',
			'Ghost in the Shell (1995)',
			'Mullholland Drive',
			'No Country For Old Men'
		]
	},
	{
		title: {
			en: 'Games:',
			fr: 'Jeux vidéos :',
			jp: 'ゲーム：'
		},
		favourites: [
			'Nine Sols - Red Candle Games',
			'Eternal Strands - Yellow Brick Games',
			'1000x Resist - Sunset Visitor',
			'No Rest For The Wicked - Moon Studios'
		]
	},
	{
		title: {
			en: 'Magazines:',
			fr: 'Magazines :',
			jp: '雑誌：'
		},
		favourites: [
			'Edge Magazine',
			'Apartamento',
			'Granta Magazine',
			'Possession Immédiate',
			'Playground Magazine'
		]
	}
];
