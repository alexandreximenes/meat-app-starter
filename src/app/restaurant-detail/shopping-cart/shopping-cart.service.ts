import { ThrowStmt } from "@angular/compiler/src/output/output_ast";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService{

    items: CartItem[] = [];

    constructor(){
    }

    clear(){
        this.items = [];
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find(mItem => item.id == mItem.menuItem.id);
        if(foundItem){
            foundItem.quantity = ++foundItem.quantity;
        }else{
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): any{
        return this.items
        .map(item => item.value())
        .reduce((prev, elem) => elem + prev, 0);
    }
    
}