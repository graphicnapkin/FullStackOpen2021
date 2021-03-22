export interface PartType {
	name: string
	exercises: number
	id: number
}

export interface Parts {
	parts: PartType[]
}

export interface CourseType extends Parts {
	name: string
	id: number
}
