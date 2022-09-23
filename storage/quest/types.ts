import { URL, UUID } from "../common"

export enum Tag {
  Design = "design",
  Management = "management",
  Research = "research",
  Presentation = "presentation",
  SoftwareDevelopment = "softwareDevelopment",
  CustomerSuccess = "customerSuccess",
  Leadership = "leadership",
}

export interface Quest {
  questId: string
  title: string
  description: string
  reward: number
  tags: Tag[]
  image?: URL
  userId?: string
  bidders?: string[]
  status?: string
}

export interface Bid {
  bidId: UUID
  questId: UUID
  userId: UUID
  amount: number
  timeEstimate: string
  createdAt: Date
  updatedAt?: Date
  status?: string
}
