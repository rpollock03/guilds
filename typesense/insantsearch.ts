import { environment } from "env/env"
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: environment.typesense_api_key,
    nodes: [
      {
        host: "diqlbuj6yapn8mehp-1.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,description,tags",
  },
})

export const searchClient = typesenseInstantsearchAdapter.searchClient
