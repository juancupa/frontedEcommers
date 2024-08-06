import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit{

    id:number =0;
    code: string ='001';
    name: string ='';
    description: string='';
    price:number=0;
    urlImage: string='';
    userId: string='1';
    categoryId:string ='1';
    selectFile! :File;

    categories: Category[]=[];

    constructor(private productService:ProductService,
                private router:Router,
                private activatedRouter:ActivatedRoute,
                private toastr:ToastrService,
                private categoryService:CategoryService
    ){

    }

  ngOnInit(): void {
        this.getProductById();
        this.getCategories();
  }

  addProduct(){

    const formData =new FormData();
    formData.append('id',this.id.toString());
    formData.append('name',this.name);
    formData.append('code', this.code)
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('image',this.selectFile);
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);

    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data =>{console.log(data);
        if(this.id ==0){
          this.toastr.success('Producto registrado correctamente','Productos');
        }else{
          this.toastr.success('Producto actualizado correctamente','Productos');
        }

                this.router.navigate(['admin/product']);
             }
    );


  }

    getProductById(){
      this.activatedRouter.params.subscribe(
        prod =>{
          let id = prod['id'];
          if(id){
            console.log('el valor de la variable id es:'+id);
            this.productService.getProductById(id).subscribe(
              data=>{
                this.id=data.id;
                this.code=data.code;
                this.name=data.name;
                this.description=data.description;
                this.urlImage=data.urlImage;
                this.price=data.price;
                this.userId=data.userId;
                this.categoryId=data.CategoryId

              }
            );
          }
        }
      );
    }

    onFileSelected(event : any){
      this.selectFile = event.target.files[0];
    }

getCategories(){
  return this.categoryService.getCategoryList().subscribe(
    data => this.categories=data
  );
}

}
