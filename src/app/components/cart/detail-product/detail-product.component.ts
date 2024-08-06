import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from '../../../services/cart.service';
import { ItemCart } from 'src/app/common/item-cart';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{

  id: number =0;
  name: string='';
  description :string='';
  price :number =0;
  urlImage: string='';
  quantity: number=0;

  ngOnInit(): void {

    this.getProducyId();

  }


  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private cartSrvice:CartService,
              private toastr:ToastrService
  ){}


  getProducyId(){
    this.activatedRoute.params.subscribe(
      p=>{
        let id= p['id'];
        if(id){
          this.productService.getProductById(id).subscribe(
            data =>{
              this.id=data.id;
              this.name=data.name;
              this.description=data.description;
              this.urlImage=data.urlImage;
              this.price=data.price;

            }
          );
        }
      }
    );


  }


  addCart(id: number){
    console.log('id product: '+id);
    console.log('name product: '+ this.name);
    console.log('quantity product: '+this.quantity);
    console.log('price product: '+this.price);

    let item = new ItemCart(id, this.name, this.quantity, this.price);

    this.cartSrvice.addItemCart(item);
    console.log("total carrito:");
    console.log(this.cartSrvice.totalCart());

    this.toastr.success('Producto añandido al carrito de compras', 'Carrito compras');
  }
}
