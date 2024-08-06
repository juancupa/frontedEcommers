import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../common/category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{

  id: number =0;
  name : string ='';

  constructor(private categoryService:CategoryService,
              private toastr:ToastrService,
              private router:Router,
              private ActivateRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
this.getCategoryById();
  }

  addCategory(){

    console.log(this.name);
    let category = new Category(this.id, this.name);
    this.categoryService.createCategory(category).subscribe(

      res=>{
        this.toastr.success('categoria registrada correctamente','Categorias');
        this.router.navigate(['admin/category']);
      }
    );
  }


  getCategoryById(){

    this.ActivateRoute.params.subscribe(

      category =>{
        let id=category['id'];
        if(id){
          console.log('valor de la variable id:' +id);
          this.categoryService.getCategoryById(id).subscribe(
            data =>{
              this.id= data.id;
              this.name = data.name;
            }
          )
        }
      }
    );
  }

}
