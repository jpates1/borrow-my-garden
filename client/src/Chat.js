import React, { useState, useEffect } from 'react';
import { Chat as StreamChat, ChannelList, Channel, Window, ChannelHeader, MessageInput } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

const Chat = ({ client, setActiveChannel, activeChannel, channelName, setChannelName }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const getChannels = async () => {
      if (client) {
        const filter = { type: 'messaging', members: { $in: [client.userID] } };
        const sort = { last_message_at: -1 };
        const response = await client.queryChannels(filter, sort, {
          watch: true,
          state: true,
        });
        setChannels(response);
      }
    };
    getChannels();
  }, [client]);

  return (
    <div className="chat-container">
      <div className="channel-list-container">
        <ChannelList
          channels={channels}
          setActiveChannel={setActiveChannel}
          activeChannel={activeChannel}
          previewLength={30}
          List={ChannelListMessenger}
          setChannelName={setChannelName}
        />
      </div>
      <div className="channel-container">
        <ChannelHeader />
        <Window>
          <MessageInput focus />
        </Window>
      </div>
    </div>
  );
};

export default Chat;
