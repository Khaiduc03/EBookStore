import {Gender} from '../../types';
import {USER_ROLE} from './auth.type';

export interface ConversationI {
  uuid: string;
  user_uuid: string;
  created_at: string;
  joined_uuid: string;
  last_message_uuid: string | null;
  your_name: string;
  joined_name: string;
  joined_status: boolean;
  joined_url: string;
  your_url: string | null;
  message: string;
  last_sender_name: string | 'You';
  last_message_time: string;
  is_seen: boolean | null;
}

export interface MessageI {
  uuid: string;
  conversation_uuid: string;
  user_uuid: string;
  message: string;
  created_at?: string;
  type?: MessageType | null;
  // sender_name: string;
  sender_image?: string | null;
  // sender_status: string;
}
export enum MessageType {
  MESSAGE = 'message',
  IMAGE = 'image',
  VIDEO = 'video',
  FILE = 'file',
  LINK = 'link',
}
export interface RequsetCreateConversationI {
  //user_uuid who will join the conversation
  joined_uuid: string;
}

export interface RequestJoinConversationI {
  //conversation_uuid of the conversation
  uuid: string;
  last_message_uuid?: string;
}

export interface RequestCreateConversationI {
  joined_uuid: string;
}

export interface RequestAddMessageI {
  //conversation_uuid of the conversation
  conversation_uuid: string;
  //content of the message
  message: string;

  type?: MessageType;
}

export interface ListConversationStateI {
  conversations: ConversationI[];
  messages: MessageI[];

  // loading: boolean;
  // error: string | null;
}

export interface Accesstoken {
  payload: string;
}

export interface UserI {
  uuid: string;
  fullname?: string;
  phone?: string | null;
  dob?: string | null;
  email: string;
  gender?: Gender | null;
  address: string;
  roles: USER_ROLE;
  summary: string | null;
  status: boolean | null;
  device_token: string;
  image_url: string | null;
  isUpdate: boolean;
  isPassword: boolean;
  followercount?: number;
  followingcount?: number;
}
