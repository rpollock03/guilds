import React, {useEffect, useState} from 'react'
import {StreamChat} from 'stream-chat'
import {
   Chat,
   Channel,
   Window,
   ChannelHeader,
   MessageList,
   MessageInput,
   Thread,
   ChannelList,
   LoadingIndicator
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css'

const apiKey =process.env.NEXT_PUBLIC_CHAT_API

//HARD CODED REPLACE WITH BACKEND
const user = {
    id: 'john',
    name:'john',
    image: 'https://i.picsum.photos/id/1006/200/200.jpg?hmac=yv53p45TOMz8bY4ZXUVRMFMO0_6d5vGuoWtE2hJhxlc'
}

const filters = {type: 'messaging', members: {$in: [user.id]}}

const Messaging = ()=> {

    const [client, setClient] = useState(null)

    useEffect(()=>{
        async function init(){
            const chatClient = StreamChat.getInstance(apiKey)

            await chatClient.connectUser(user, chatClient.devToken(user.id))
           
            const channel = chatClient.channel('messaging', 'react-talk', {
                image: 'https://i.picsum.photos/id/1006/200/200.jpg?hmac=yv53p45TOMz8bY4ZXUVRMFMO0_6d5vGuoWtE2hJhxlc',
                name: 'some chat name',
                members: [user.id]
            }) //react-talk is id of channel
            
            await channel.watch()

            setClient(chatClient)
        }

        init()
        if(client) return ()=> client.disconnectUser()
    },[])

    if(!client ) return <LoadingIndicator/>
    
    return(
        <Chat client={client} theme='messaging light'>
            <ChannelList
                filters={filters}
                sort={{last_message_at: -1}}
            />
            <Channel >
                <Window>
                    <ChannelHeader/>
                    <MessageList/>
                    <MessageInput/>
                </Window>
                <Thread/>
            </Channel>
        </Chat>
    )
}

export default Messaging