import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from '../../../services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  categories: Category[]=[];

  constructor(private categoryService: CategoryService,
              private toastr:ToastrService
  ){}

  ngOnInit(): void {

    this.listCategories();
  }

  listCategories(){
    this.categoryService.getCategoryList().subscribe(
      data=> this.categories=data
    )
  }

  deleteCategoryById(id:number){
    console.log("id de la categoria antes de eliminar: "+id);
    this.categoryService.deleteCategoryById(id).subscribe(
      ()=>this.listCategories()
    )
  }

}
