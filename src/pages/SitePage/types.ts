export interface Experience {
  id: string
  author: string
  date: string
  summary: string
  images: string[]
}

type Tag = string

export interface Site {
  title: string
  height: number
  location: string
  complexity: Complexity
  description: string
  tags: Tag[]
  img: string
  popularity: number
}

export enum Complexity {
  low = 'low',
  medium = 'medium',
  high = 'high',
  extreme = 'extreme',
}
