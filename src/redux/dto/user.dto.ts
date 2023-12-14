import {Gender} from '../../types';

export class UpdateProfileDto {
  fullname: string;
  phone: string;
  dob: string;
  gender: Gender;
  constructor(fullname: string, phone: string, dob: string, gender: Gender) {
    this.fullname = fullname;
    this.phone = phone;
    this.dob = dob;
    this.gender = gender;
  }
}
// Change password DTO
export class ChangePasswordDto {
  old_password: string;
  new_password: string;
  confirm_password: string;
  constructor(
    old_password: string,
    new_password: string,
    confirm_password: string,
  ) {
    this.old_password = old_password;
    this.new_password = new_password;
    this.confirm_password = confirm_password;
  }
}
