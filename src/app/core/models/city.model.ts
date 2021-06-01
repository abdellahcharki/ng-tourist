import { Country } from "./country.model";
import { Place } from "./place.model";

export interface City{
    id_ville?:number;
    nom_ville?:string,
    nom_pays?:string,
    desc?:string,
    date?:Date,
    photo_v?:string,
    nbr_ville?:number,
    id_p?:number,
    responsPlace?:Place[]
}