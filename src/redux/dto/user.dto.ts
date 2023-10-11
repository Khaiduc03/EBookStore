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
