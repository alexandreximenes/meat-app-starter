import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[];

  constructor(private restaurantService: RestaurantService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.restaurantService.menuByRestaurantId(this.route.parent.snapshot.params['id']).subscribe(item => this.menu = item);
  }

  addMenuItem(event){
    console.log('Recebendo:');
    console.log(event);
  }

}
