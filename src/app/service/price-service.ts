import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Price } from '../model/Price';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

    constructor(
    private http: HttpClient
    ) { }

    getAllPrices(): Observable<Price[]> {
        return this.http.get<Price[]>('http://localhost:8080/price/getAllPriceDetails/');
    }

    getPricesDetails(codBrand: number, codProduct: number, effectiveDate: Date): Observable<Price> {
        return this.http.get<Price>('http://localhost:8080/price/getPriceDetails/' 
        + codBrand + '/' + codProduct + '/' + effectiveDate );
    }

}
