import { Component } from '@angular/core';

import { Products } from './products';
import { ProductService } from './products.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [ProductService]
})
export class AppComponent  {
   name:string = 'Angular'; 
   value:number = 5000;
   result:boolean = true;
   students: any[] =[{"name":"James","id":100,"email":"james@gmail.com","mobile":43543535},{"name":"Vimal","id":101,"email":"vimal@gmail.com","mobile":34598797},{"name":"Kishore","id":102,"email":"kishore@gmail.com","mobile":349587349758},{"name":"Suresh","id":103,"email":"suresh@gmail.com","mobile":345987394758}];

  products : Products[]; 
  constructor(private productServ : ProductService){}

  ngOnInit() : any{
    this.productServ.getProducts().subscribe( products => this.products = products);
    return this.products;
  }
 


  }
   
  /*
custome directive : ngif, ngfor get called from part of browser module.


  */