import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageSkleton from './skeletons/MessageSkleton';

const ChatContainer = () => {
  const {messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
  } = useChatStore();

  useEffect(()=> {
    getMessages(selectedUser._id);
  }, [selectedUser, getMessages]);

  if(true) {
    return(
      <div className='flex-1 flex flex-col overflow-auto'>
          <ChatHeader />
          <MessageSkleton />
          <MessageInput />
        </div>
    );
  }

  // return (
  //   <div className='flex-1 flex flex-col overflow-auto'>
  //     <ChatHeader />

  //     <p>message....</p>

  //     <MessageInput />
  //   </div>
  // );
};

export default ChatContainer;