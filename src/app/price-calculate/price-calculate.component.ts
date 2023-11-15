import { Component, OnInit } from '@angular/core';
import { PriceService } from '../service/price-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-price-calculate',
  templateUrl: './price-calculate.component.html',
  styleUrls: ['./price-calculate.component.scss']
})
export class PriceCalculateComponent implements OnInit{

  constructor(
    private priceService: PriceService,
    private dialog: MatDialog
  ) { }

  calculatePriceForm: FormGroup;
  priceResult: number;

  ngOnInit() {
    this.calculatePriceForm = new FormGroup({
      codBrand: new FormControl('', Validators.required),
      codProduct: new FormControl('', [Validators.required]),
      date: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const codBrandValue = this.calculatePriceForm.value.codBrand;
    const codProductValue = this.calculatePriceForm.value.codProduct;
    const dateValue = this.calculatePriceForm.value.date;

    this.priceService.getPricesDetails(codBrandValue, codProductValue, dateValue).subscribe(
      result => this.priceResult = result.price
    );
  }

}
