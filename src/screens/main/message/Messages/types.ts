export interface IMessage {
  isUser: boolean;
  text: string;
  time: string;
}

export const messages: IMessage[] = [
  {
    isUser: false,
    text: 'Hello! David Beckham',
    time: '9:00 AM',
  },
  {
    isUser: false,
    text: 'I hope you are doing well. I am writing to check in and see how you are feeling. I am always thinking of you, and I hope you are healthy and happy. If there is anything I can do to help, please do not hesitate to reach out.',
    time: '9:06 AM',
  },
  {
    isUser: true,
    text: "Hi! I'm fine.",
    time: '9:07 AM',
  },
  {
    isUser: true,
    text: 'Thank you for asking about my health these days. How are you doing? Where are you living?',
    time: '9:10 AM',
  },
  {
    isUser: false,
    text: "Sorry, I'm busy right now and can't reply to you later",
    time: '9:16 AM',
  },
  {
    isUser: true,
    text: "When you have free time, let's meet for coffee.",
    time: '9:20 AM',
  },
  {
    isUser: false,
    text: 'Today. I have free time',
    time: '9:22 AM',
  },
  {
    isUser: false,
    text: 'I like chicken hihi',
    time: '9:24 AM',
  },
  {
    isUser: true,
    text: 'Oh, haha',
    time: '9:30 AM',
  },
  {
    isUser: false,
    text: 'Oh, hehe',
    time: '9:35 AM',
  },
  {
    isUser: true,
    text: 'hihi',
    time: '9:38 AM',
  },
];
