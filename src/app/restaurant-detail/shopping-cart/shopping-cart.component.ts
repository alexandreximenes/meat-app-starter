import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  constructor(private shoppingCartservice: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): CartItem[]{
    return this.shoppingCartservice.items;
  };

  addItem(item:any){
    this.shoppingCartservice.addItem(item);
  }

  clear(){
    this.shoppingCartservice.clear();
  }
  removeItem(item:any){
    this.shoppingCartservice.removeItem(item);
  }

  total(): number {
    return this.shoppingCartservice.total();
  }

}
