import { Injectable } from '@angular/core';
import { Hotel as HotelModel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  hotels: HotelModel[];
  hotel!: HotelModel;
  constructor() {
    this.hotels = [
    {
      idHotel: 1,
      nomHotel: "Hotel Marhaba",
      adresseHotel: "Boulevard 14 Janvier",
      villeHotel: "Sousse",
      nombreEtoiles: 4,
      prixNuit: 250,
      dateCreation: new Date("01/14/2011")
    },
    {
      idHotel: 2,
      nomHotel: "Hotel Iberostar",
      adresseHotel: "Zone Touristique",
      villeHotel: "Hammamet",
      nombreEtoiles: 5,
      prixNuit: 400,
      dateCreation: new Date("12/17/2010")
    },
    {
      idHotel: 3,
      nomHotel: "Hotel El Mouradi",
      adresseHotel: "Zone Touristique",
      villeHotel: "Djerba",
      nombreEtoiles: 4,
      prixNuit: 300,
      dateCreation: new Date("02/20/2020")
    },
    {
      idHotel: 4,
      nomHotel: "Hotel Mövenpick",
      adresseHotel: "Boulevard de la Corniche",
      villeHotel: "Sousse",
      nombreEtoiles: 5,
      prixNuit: 500,
      dateCreation: new Date("06/10/2018")
    },
    {
      idHotel: 5,
      nomHotel: "Hotel Royal Azur",
      adresseHotel: "Avenue de la République",
      villeHotel: "Hammamet",
      nombreEtoiles: 5,
      prixNuit: 450,
      dateCreation: new Date("09/25/2015")
    },
    {
      idHotel: 6,
      nomHotel: "Hotel Palm Beach",
      adresseHotel: "Zone Touristique",
      villeHotel: "Monastir",
      nombreEtoiles: 4,
      prixNuit: 280,
      dateCreation: new Date("03/15/2016")
    },
    {
      idHotel: 7,
      nomHotel: "Hotel Radisson Blu",
      adresseHotel: "Avenue Mohamed V",
      villeHotel: "Tunis",
      nombreEtoiles: 5,
      prixNuit: 550,
      dateCreation: new Date("11/05/2017")
    },
    {
      idHotel: 8,
      nomHotel: "Hotel Golden Yasmin",
      adresseHotel: "Zone Touristique",
      villeHotel: "Tozeur",
      nombreEtoiles: 4,
      prixNuit: 220,
      dateCreation: new Date("07/22/2014")
    },
    {
      idHotel: 9,
      nomHotel: "Hotel Novotel",
      adresseHotel: "Avenue Habib Bourguiba",
      villeHotel: "Tunis",
      nombreEtoiles: 4,
      prixNuit: 350,
      dateCreation: new Date("04/18/2019")
    },
    {
      idHotel: 10,
      nomHotel: "Hotel Seabel Alhambra",
      adresseHotel: "Port El Kantaoui",
      villeHotel: "Sousse",
      nombreEtoiles: 4,
      prixNuit: 320,
      dateCreation: new Date("08/30/2013")
    }
    ];
  }

  listeHotels(): HotelModel[] {
    return this.hotels;
  }

  ajouterHotel(hotel: HotelModel) {
    this.hotels.push(hotel);
  }
  supprimerHotel(hotel: HotelModel) {
  const index = this.hotels.indexOf(hotel, 0);
  if (index > -1) {
    this.hotels.splice(index, 1);
  }
}
consulterHotel(id: number): HotelModel {
  this.hotel = this.hotels.find(h => h.idHotel == id)!;
  return this.hotel;
}
updateHotel(hotel: HotelModel) {
  const index = this.hotels.indexOf(hotel, 0);

  if (index > -1) {
    this.hotels.splice(index, 1);      // supprimer l'ancien élément
    this.hotels.splice(index, 0, hotel); // insérer le nouvel élément
  }
}
}