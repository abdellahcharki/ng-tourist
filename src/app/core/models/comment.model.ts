import { User } from "./user.model";

export interface Comment{
    id:number;
    author:User;
    body:string;
}