import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hotel as HotelModel } from '../model/hotel.model';
import { HotelService } from '../services/hotel.service';
import { RouterLink } from '@angular/router';
@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-hotel',
  styleUrl: './hotel.css',
  templateUrl: './hotel.html',
})
export class Hotel implements OnInit {
   hotels: HotelModel[];
  constructor(private hotelService: HotelService) {
    this.hotels = hotelService.listeHotels();
}
supprimerHotel(h: HotelModel) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.hotelService.supprimerHotel(h);
}

  ngOnInit(): void {
  }

}
