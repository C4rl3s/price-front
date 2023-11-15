import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Price } from '../model/Price';
import { PriceService } from '../service/price-service';


@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  constructor(
    private priceService: PriceService,
  ) { }
 
  dataSource = new MatTableDataSource<Price>();
  displayedColumns: string[] = ['codBrand', 'startDate', 'endDate', 
  'codFee', 'codProduct', 'price'];

  ngOnInit(): void {
    this.priceService.getAllPrices().subscribe(
      prices => this.dataSource.data = prices
    );
  }
}