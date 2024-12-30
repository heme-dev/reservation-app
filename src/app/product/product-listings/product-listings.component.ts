import { Component,OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { products } from '../../products';

@Component({
  standalone: true,
  selector: 'app-product-listings',
  imports: [RouterLink, NgOptimizedImage, CommonModule ],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any

  constructor() {}

  ngOnInit() {
    this.products = products
  }
}
