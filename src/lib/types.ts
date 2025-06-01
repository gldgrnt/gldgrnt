export type Project = {
	title: string
	slug: string
	description: {
		en: string
		fr?: string
		jp?: string
	}
	published: boolean
}

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	published: boolean
}