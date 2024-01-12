import { RegisterOptions, UseFormRegister } from "react-hook-form";

export interface InputProps {
    placeholder: string;
    type: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}
export interface UserInfo {
    name: string;
    fone: string;
    streetName: string;
    neighborhood: string;
    numberHause: string;
    paymentForm: string;
    userId: string;
    photo: string | null;
    refHause: string;
  }