import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel as HotelModel } from '../model/hotel.model';
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'app-update-hotel',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-hotel.html',
  styles: ``
})
export class UpdateHotel implements OnInit {

  currentHotel = new HotelModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentHotel =
      this.hotelService.consulterHotel(
        this.activatedRoute.snapshot.params['id']
      );

    console.log(this.currentHotel);
  }
 updateHotel() {
  this.hotelService.updateHotel(this.currentHotel);
  this.router.navigate(['hotel']);
}
}