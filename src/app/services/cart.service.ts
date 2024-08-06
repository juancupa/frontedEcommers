import { Injectable } from '@angular/core';
import { ItemCart } from '../common/item-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Map<number,ItemCart>= new Map<number,ItemCart>();

  itemList: ItemCart[]=[];

  constructor() { }


  addItemCart(itemCart: ItemCart){
  this.items.set(itemCart.productId,itemCart);
  }

  deleteItemCart(productId:number){

    this.items.delete(productId);
    this.items.forEach(
        (valor,clave) =>{
          console.log('esta es la clave y su valos:' +clave, valor);
        }
    )
  }

  totalCart(){

    let totalCart: number=0;
    this.items.forEach(
      (item, clave)=>{
        totalCart += item.getTotalPriceItem();
        console.log(''+totalCart);
      }
    );
    return totalCart;

  }

  convertToListFromMap(){
this.itemList.splice(0,this.itemList.length);
this.items.forEach(
  (item, clave)=>{
        this.itemList.push(item);
        console.log(''+this.itemList);
  }
);

return this.itemList

  }
}
