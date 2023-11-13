import {PayloadAction} from '@reduxjs/toolkit';
import {call, takeLatest} from 'redux-saga/effects';
import {io} from 'socket.io-client';
import {BASE_URL} from '../../environment';
import {useAppSelector} from '../../hooks';
import {ChatActions} from '../reducer/chat.reducer';
import {getAuthAccessToken} from '../selectors';
import {
  ConversationI,
  MessageI,
  RequestAddMessageI,
  RequestJoinConversationI,
  RequsetCreateConversationI,
} from '../types';

//function connect to socket
function connect() {
  const token = useAppSelector(getAuthAccessToken);

  const socket = io(BASE_URL, {
    extraHeaders: {
      Authorization: `${token}`,
    },
  });

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function* getListConversation(): Generator {
  try {
    const socket: any = yield call(connect);
    socket.on('conversations', (data: ConversationI[]) => {
      ChatActions.handleGetListConversationSuccess(data);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function* joinConversation(
  action: PayloadAction<RequestJoinConversationI>,
): Generator {
  const socket: any = yield call(connect);
  socket.emit('joinConversation', action.payload);
  socket.on('messages', (data: MessageI[]) => {
    ChatActions.handleJoinConversationSuccess(data);
  });
}

function* addMessage(action: PayloadAction<RequestAddMessageI>): Generator {
  const socket: any = yield call(connect);
  socket.emit('addMessage', action.payload);
  socket.on('messageAdd', (data: MessageI) => {
    ChatActions.handleAddMessageSuccess(data);
  });
}

function* createConversation(
  action: PayloadAction<RequsetCreateConversationI>,
): Generator {
  const socket: any = yield call(connect);
  socket.emit('createConversation', action.payload);
  socket.on('conversations', (data: any) => {
    ChatActions.handleCreateConversationSuccess(data);
  });
}

// function* leaveConversation(action: PayloadAction<ConversationI>): Generator {
//   const socket: any = yield call(connect);
//   socket.emit('leaveConversation', action.payload);
//   socket.on('conversations', (data: any) => {
//     ChatActions.handleLeaveConversationSuccess(data);
//   });
// }

export default function* watchChatSaga() {
  // yield takeLatest(
  //   ChatActions.handleGetListConversation.type,
  //   getListConversation,
  // );
  // yield takeLatest(ChatActions.handleJoinConversation.type, joinConversation);
  // yield takeLatest(ChatActions.handleAddMessage.type, addMessage);
  // yield takeLatest(
  //   ChatActions.handleCreateConversation.type,
  //   createConversation,
  // );
}
