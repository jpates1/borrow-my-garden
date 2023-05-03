import React, { useState } from 'react';
import { ChannelListTeam } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelListItem } from './';

const ChannelListMessenger = (props) => {
  const { setChannel, setIsCreating, setIsEditing, setToggleContainer } = props;

  const filters = { type: 'messaging' };
  const options = {};

  return (
    <div>
      <ChannelSearch setChannel={setChannel} />
      <TeamChannelList
        filters={filters}
        options={options}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList
            {...listProps}
            type="messaging"
            setChannel={setChannel}
            setIsCreating={setIsCreating}
            setIsEditing={setIsEditing}
            setToggleContainer={setToggleContainer}
          >
            <TeamChannelListItem />
          </TeamChannelList>
        )}
        Preview={(previewProps) => (
          <TeamChannelList
            {...previewProps}
            type="messaging"
            setChannel={setChannel}
            setIsCreating={setIsCreating}
            setIsEditing={setIsEditing}
            setToggleContainer={setToggleContainer}
          >
            <TeamChannelListItem />
          </TeamChannelList>
        )}
      />
    </div>
  );
};

export default ChannelListMessenger;
