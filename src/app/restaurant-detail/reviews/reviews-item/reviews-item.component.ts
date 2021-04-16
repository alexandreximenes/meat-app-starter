import { Component, Input, OnInit } from '@angular/core';
import { Reviews } from '../reviews.model';

@Component({
  selector: 'mt-reviews-item',
  templateUrl: './reviews-item.component.html',
  styleUrls: ['./reviews-item.component.css']
})
export class ReviewsItemComponent implements OnInit {

  @Input() reviews: Reviews;

  constructor() { }

  ngOnInit() {
    
  }

}
