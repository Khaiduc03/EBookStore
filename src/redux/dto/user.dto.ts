import {Gender} from '../../types';

export class UpdateProfileDto {
  fullname: string;
  phoneNumber: string;
  dob: string;
  gender: Gender;
  constructor(
    fullname: string,
    phoneNumber: string,
    dob: string,
    gender: Gender,
  ) {
    this.fullname = fullname;
    this.phoneNumber = phoneNumber;
    this.dob = dob;
    this.gender = gender;
  }
}
