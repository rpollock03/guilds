import { URL, UUID } from "./common";

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
  image: URL;
  reward: number;
  title: string;
  description: string;
  tags: Tag[];
  bids: Bid[];
}

export interface Bid {
  userId: UUID;
  amount: number;
  timeEstimate: string;
  // createdAt, updatedAt should be available from Firestore
}
