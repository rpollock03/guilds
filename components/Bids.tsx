import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection, query } from "firebase/firestore"

export default function Bids({ path }): JSX.Element {
  const firestore = useFirestore()
  const questsQuery = query(collection(firestore, path))
  const { status, data: bids } = useFirestoreCollectionData(questsQuery)

  return (
    <>
      {status && (
        <>
          {status === "loading" ? (
            <div>loading</div>
          ) : (
            <div>
              {bids?.length ? (
                bids.map((bid, idx) => (
                  <div key={idx}>
                    <div>Amount: {bid?.amount}</div>
                    <div>Time estimate: {bid?.timeEstimate}</div>
                  </div>
                ))
              ) : (
                <div style={{ margin: "auto" }}>no bids</div>
              )}
            </div>
          )}
        </>
      )}
    </>
  )
}
