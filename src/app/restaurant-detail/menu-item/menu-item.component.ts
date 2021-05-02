import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu: MenuItem;
  @Output() add = new EventEmitter();
  
  
  constructor() { }

  ngOnInit() {

  }

  emitAddEvent(){
    console.log("Enviando");
    console.log(this.menu);
   this.add.emit(this.menu);
  }
}
