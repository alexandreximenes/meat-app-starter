import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { Observable } from 'rxjs/Observable';
import { Reviews } from './reviews.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Reviews>;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.reviews = this.restaurantService.reviewsById(this.route.parent.snapshot.params['id']);

  }

}
