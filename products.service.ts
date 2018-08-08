import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Products } from './products';

@Injectable()
export class ProductService {
    private url = 'app/products.json';
    constructor( private http : Http){}

    getProducts(): Observable<Products[]>{
        return this.http.get(this.url).map((response : Response) => <Products[]> response.json()).
        do(data => console.log(JSON.stringify(data))).
        catch(this.exceptions);
    }

    private exceptions(error: Response){
        console.log(error);
        return Observable.throw(error.json().error());
    }

}

// function(data){

// }

// data=>{}