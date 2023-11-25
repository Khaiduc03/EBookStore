export interface IMessage {
  isUser: boolean;
  text: string;
  time: string;
  image?: string;
}

export type AvatarProps = {
  onPressAvatar?: () => void;
  isZoomable?: boolean;
};
