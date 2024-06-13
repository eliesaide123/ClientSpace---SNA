import { Codes } from "./codes";
import { person } from "./person";
import { Products, product } from "./product";

export interface ClientInfo{
    perons: person,
    products: Products,
    codes: Codes
}