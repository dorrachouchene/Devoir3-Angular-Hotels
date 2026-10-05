import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hotel as HotelModel } from '../model/hotel.model';
import { HotelService } from '../services/hotel.service';
@Component({
  imports: [FormsModule],
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.html',
})
export class AddHotel  implements OnInit {
  newHotel = new HotelModel();
  constructor(private hotelService: HotelService) {
  }
    addHotel() {
    this.hotelService.ajouterHotel(this.newHotel);
  }
   ngOnInit(): void {
  }

}
