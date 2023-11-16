export interface ConversationI {
  uuid: string;
  user_uuid: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
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
}

export interface MessageI {
  uuid: string;
  conversation_uuid: string;
  user_uuid: string;
  message: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  sender_name: string;
  sender_image: string | null;
  sender_status: string;
}

export interface RequsetCreateConversationI {
  //user_uuid who will join the conversation
  joined_uuid: string;
}

export interface RequestJoinConversationI {
  //conversation_uuid of the conversation
  uuid: string;
}

export interface RequestAddMessageI {
  //conversation_uuid of the conversation
  conversation_uuid: string;
  //content of the message
  message: string;
}

export interface ListConversationStateI {
  conversations: ConversationI[];
  messages: MessageI[];

  // loading: boolean;
  // error: string | null;
}


export interface Accesstoken{
  payload: string
}