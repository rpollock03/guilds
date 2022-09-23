import { Bid } from "storage/quest"

interface BidProps {
  value: Bid
}

export function Bid({ value }: BidProps): JSX.Element {
  return (
    <div>
      <div>Amount: {value?.amount}</div>
      <div>Time estimate: {value?.timeEstimate}</div>
    </div>
  )
}
