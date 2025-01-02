import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  standalone: true,
  selector: 'app-product-listings',
  imports: [RouterLink, NgOptimizedImage, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => { 
        console.error('次のエラーが発生しました: ' + err);
      }
    });
  }
}
