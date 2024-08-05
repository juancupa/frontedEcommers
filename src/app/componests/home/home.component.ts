import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/comon/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  products: Product [] =[];

  constructor(private prodcutService: ProductService){}

  ngOnInit(): void {
    this.prodcutService.getProducts().subscribe(
                    data=>this.products = data
    );

  }

}
