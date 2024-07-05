import { AddAddressType } from "./AddAddressType";

export type AddGroundType = {
  dateOfRegistration: string;
  groundName: string;
  phoneNo: string[];
  imageUrl: string[];
  address: AddAddressType;
};
