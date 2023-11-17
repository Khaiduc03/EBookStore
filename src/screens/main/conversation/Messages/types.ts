import {MessageI} from '../../../../redux';

export interface IMessage {
  uuid: boolean;
  message: string;
  conversation_uuid?: string;
  deleted_at?: any;
  user_uuid?: boolean;
  created_at?: any;
  updated_at?: any;
  image?: boolean;
}

export type AvatarProps = {
  onPressAvatar?: () => void;
  isZoomable?: boolean;
};

export const ListMessage: IMessage[] = [
  {
    uuid: true,
    message:
      'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-11-04 23:02:32',
    updated_at: '2022-11-15 16:36:13',
  },
  {
    uuid: false,
    message:
      'cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,

    created_at: '2023-09-02 03:32:08',
    updated_at: '2022-12-27 12:50:00',
  },
  {
    uuid: false,
    message:
      'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-08-02 12:53:49',
    updated_at: '2023-03-05 02:24:47',
  },
  {
    uuid: false,
    message:
      'at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-04-12 00:59:33',
    updated_at: '2023-05-28 14:14:54',
  },
  {
    uuid: false,
    message:
      'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-09-22 00:07:51',
    updated_at: '2023-10-12 22:09:03',
  },
  {
    uuid: true,
    message:
      'nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-11-01 20:46:05',
    updated_at: '2022-12-21 03:29:30',
  },
  {
    uuid: true,
    message:
      'ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2022-12-15 02:53:06',
    updated_at: '2023-08-20 04:46:07',
  },
  {
    uuid: true,
    message:
      'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-08-31 02:19:29',
    updated_at: '2023-11-03 13:14:28',
  },
  {
    uuid: false,
    message:
      'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-07-21 05:09:29',
    updated_at: '2023-09-19 17:52:50',
  },
  {
    uuid: true,
    message:
      'duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-08-22 07:58:50',
    updated_at: '2023-07-21 23:01:46',
  },
  {
    uuid: true,
    message:
      'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    created_at: '2023-05-26 07:31:36',
    updated_at: '2022-12-22 06:27:29',
  },
];

// export const messages: IMessage[] = [
//   {
//     isUser: false,
//     text: 'Hello! David Beckham',
//     time: '9:00 AM',
//   },
//   {
//     isUser: false,
//     text: 'I hope you are doing well. I am writing to check in and see how you are feeling. I am always thinking of you, and I hope you are healthy and happy. If there is anything I can do to help, please do not hesitate to reach out.',
//     time: '9:06 AM',
//   },
//   {
//     isUser: true,
//     text: "Hi! I'm fine.",
//     time: '9:07 AM',
//   },
//   {
//     isUser: true,
//     text: 'Thank you for asking about my health these days. How are you doing? Where are you living?',
//     time: '9:10 AM',
//   },
//   {
//     isUser: false,
//     text: "Sorry, I'm busy right now and can't reply to you later",
//     time: '9:16 AM',
//   },
//   {
//     isUser: true,
//     text: "When you have free time, let's meet for coffee.",
//     time: '9:20 AM',
//   },
//   {
//     isUser: false,
//     text: 'Today. I have free time',
//     time: '9:22 AM',
//   },
//   {
//     isUser: false,
//     text: 'I like chicken hihi',
//     time: '9:24 AM',
//   },
//   {
//     isUser: true,
//     text: 'Oh, haha',
//     time: '9:30 AM',
//   },
//   {
//     isUser: false,
//     text: 'Oh, hehe',
//     time: '9:35 AM',
//   },
//   {
//     isUser: true,
//     text: 'hihi',
//     time: '9:38 AM',
//   },
// ];
