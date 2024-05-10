import {format, isSameDay, isSameMonth, isSameYear} from 'date-fns';
import { MessageType } from '../redux';
export const isValidEmail = (email: string) => {
  if (email === '') {
    return false;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};
export const comparePassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

export function formatTime(receivedTime: any) {
  const now = new Date();
  const receivedDate = new Date(receivedTime);

  // Kiểm tra xem ngày tháng năm có trùng nhau không
  if (
    isSameDay(now, receivedDate) &&
    isSameMonth(now, receivedDate) &&
    isSameYear(now, receivedDate)
  ) {
    // Trả về phút và giờ nếu cùng một ngày
    return format(receivedDate, 'HH:mm');
  } else {
    // Trả về ngày và tháng nếu không cùng một ngày
    return format(receivedDate, 'dd-MM');
  }
}

export function isLink(input: string): boolean {
  const isLink = /^https?:\/\//i.test(input);

  return isLink;
}





