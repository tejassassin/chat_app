const initialState = {
    conversations: [
        { 
            id: '1',
            imageUrl: require('../../images/profiles/harsh.jpg'),
            imageAlt: 'harsh',
            title: 'harsh raj',
            createdAt: 'Apr 16',
            latestMessageText: " I'm fine ",
            messages: [

                {
                    imageUrl: require('../../images/profiles/harsh.jpg'),
                    imageAlt: 'harsh',
                    messageText: `
                        I'm fine
                    `,
                    createdAt: 'Apr 15',
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: 'How\'s it going?',
                    createdAt: 'Apr 13',
                    isMyMessage: true
                },
                {
                    imageUrl: require('../../images/profiles/harsh.jpg'),
                    imageAlt: 'harsh',
                    messageText: ' Hey bro what\'s up?',
                    createdAt: 'Apr 13',
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: 'Hey harsh?',
                    createdAt: 'Apr 13',
                    isMyMessage: true
                }
            ]
        },
        {
            id: '2', 
            imageUrl: require('../../images/profiles/harman.jpg'),
            imageAlt: 'harman',
            title: 'harman',
            createdAt: 'Oct 20',
            latestMessageText: 'good, keep it up...',
            messages: [
            
                {
                    imageUrl: require('../../images/profiles/harman.jpg'),
                    imageAlt: 'harman',
                    messageText: `
                        good, keep it up...
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: `
                        I'm doing ok. Just working on building some applications to
                        bulk up my resume, so I can get a better job.
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: true
                },
                {
                    imageUrl: require('../../images/profiles/harman.jpg'),
                    imageAlt: 'harman',
                    messageText: `
                        I've just been really busy at work myself.
                    `,
                    createdAt: 'Oct 19',
                    isMyMessage: false
                },
                {
                    imageUrl: null,
                    imageAlt: null,
                    messageText: 'Yes it has been a little while',
                    createdAt: 'Oct 19',
                    isMyMessage: true
                },
                {
                    imageUrl: require('../../images/profiles/harman.jpg'),
                    imageAlt: 'harman',
                    messageText: 'Hey!!!! Have not spoken to you for a while',
                    createdAt: 'Oct 19',
                    isMyMessage: false
                }
            ]
        },
        {
            id: '3', 
            imageUrl: require('../../images/profiles/solera.png'),
            imageAlt: 'Solera life',
            title: 'Solera life group',
            createdAt: '1 week ago',
            latestMessageText: 'welcome',
            messages: [
                {
                    imageUrl: require('../../images/profiles/solera.png'),
                    imageAlt: null,
                    messageText: 'welcome',
                    createdAt: '1 week ago',
                    isMyMessage: false
                }
            ]
        }
      
          
    ],
    selectedConversation: {}
};

initialState.selectedConversation = initialState.conversations[0];

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECTED_CONVERSATION_CHANGED': {
        const newState = { ...state };
        newState.selectedConversation = 
            newState.conversations.find(
                conversation => conversation.id === action.conversationId
            );

        return newState;
      }
      case 'DELETE_CONVERSATION': {
        const newState = { ...state };
        let selectedConversationIndex = 
            newState.conversations.findIndex(c => c.id === newState.selectedConversation.id);
        newState.conversations.splice(selectedConversationIndex, 1);

        if (newState.conversations.length > 0) {
            if (selectedConversationIndex > 0) {
                --selectedConversationIndex;
            }
    
            newState.selectedConversation = newState.conversations[selectedConversationIndex];
        } else {
            newState.selectedConversation = null;
        }

        return newState;
      }
      case 'NEW_MESSAGE_ADDED': {
        const newState = { ...state };
        newState.selectedConversation = { ...newState.selectedConversation };
        
        newState.selectedConversation.messages.unshift(
            {
                imageUrl: null,
                imageAlt: null,
                messageText: action.textMessage,
                createdAt: 'Apr 16',
                isMyMessage: true
            },
        )

        return newState;
      }
      default:
        return state;
    }
  }
  
export default conversationsReducer;