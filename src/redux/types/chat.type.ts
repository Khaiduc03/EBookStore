export interface ConversationI {
    uuid: string;
    user_uuid: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string | null;
    last_message_uuid: string | null;
    your_name : string;
    join_name : string;
    status : string;
    joined_url : string | null;
    your_url : string | null;
    messages: string;
    last_sender_name: string | "You";
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

