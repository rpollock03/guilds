import React, { useEffect, useState } from "react"
import { StreamChat } from "stream-chat"
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  ChannelList,
  LoadingIndicator,
} from "stream-chat-react"
import "stream-chat-react/dist/css/index.css"

import { getFunctions, httpsCallable } from "firebase/functions"
import { useFirebaseApp } from "reactfire"
import { useUser } from "reactfire"

const apiKey = process.env.NEXT_PUBLIC_CHAT_API

const Messaging = () => {
  const { data: user } = useUser()
  const [client, setClient] = useState(null)
  const app = useFirebaseApp()

  const currentUser = {
    id: user?.uid,
    name: user?.displayName,
    email: user?.email,
  }

  interface IChannel {
    name?: string
    image?: string
    members: string[]
  }

  const [newChannel, setNewChannel] = useState<IChannel>({
    members: [currentUser.id],
  })

  const filters = { type: "messaging", members: { $in: [currentUser.id] } }

  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey)

      const functions = getFunctions(app, "europe-west2")
      const getToken = httpsCallable(
        functions,
        "ext-auth-chat-getStreamUserToken"
      )
      const token = await getToken()
      const streamToken = token.data.toString()

      await chatClient.connectUser(currentUser, streamToken)

      const channel = chatClient.channel("messaging", "channeltestId", {
        newChannel,
      })

      await channel.watch()

      setClient(chatClient)
    }

    if (user) init()

    if (client) return () => client.disconnectUser()
  }, [user, newChannel])

  if (!client) return <LoadingIndicator />

  return (
    <Chat client={client} theme="messaging light">
      <ChannelList filters={filters} sort={{ last_message_at: -1 }} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default Messaging
