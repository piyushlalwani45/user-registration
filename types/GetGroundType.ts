import { AddressType } from "./GetAddressType";

export type GetGroundType = {
  id: string;
  dateOfRegistration: string;
  groundName: string;
  phoneNo: string;
  imageUrl: string;
  address: AddressType;
};
