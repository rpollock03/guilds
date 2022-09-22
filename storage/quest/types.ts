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
  questId: UUID
  userId?: UUID
  image: URL
  reward: number
  title: string
  description: string
  tags: Tag[]
  bids?: Bid[]
  bidders?: UUID[]
  status: string
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
  // createdAt, updatedAt should be available from Firestore
}
