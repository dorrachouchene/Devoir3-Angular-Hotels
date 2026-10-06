import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hotel as HotelModel } from '../model/hotel.model';
import { HotelService } from '../services/hotel.service';
import { Router } from '@angular/router';
@Component({
  imports: [FormsModule],
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.html',
})
export class AddHotel  implements OnInit {
  newHotel = new HotelModel();
  constructor(private hotelService: HotelService ,  private router: Router) {
  }
    addHotel() {
    this.hotelService.ajouterHotel(this.newHotel);
    this.router.navigate(['hotel']);
  }
   ngOnInit(): void {
  }

}
