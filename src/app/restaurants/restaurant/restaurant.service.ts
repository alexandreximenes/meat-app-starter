import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { PATH_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Restaurant } from "./restaurant.model";
import { ErrorHandler } from "app/app.error-handler";
import { Reviews } from "app/restaurant-detail/reviews/reviews.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService{

  constructor(private http: Http){}

  res: Restaurant[];
  item: MenuItem;

  restaurants(): Observable<Restaurant[]>{
    
      return this.http.get(`${PATH_API}/restaurants`)
      .map(response => response.json())
      .catch(error => ErrorHandler.message(error));
  }

  restaurantById(id: string): Observable<Restaurant>{
    return this.http.get(`${PATH_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(error => ErrorHandler.message(error));
  }

  reviewsById(id: string): Observable<Reviews>{
    return this.http.get(`${PATH_API}/restaurants/${id}/reviews`)
    .map(response => response.json())
    .catch(error => ErrorHandler.message(error));
  }

  menuByRestaurantId(id: string): Observable<MenuItem[]>{
    return this.http.get(`${PATH_API}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(error => ErrorHandler.message(error));
  }


}