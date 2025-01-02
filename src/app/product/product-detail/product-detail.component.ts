import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['productId'];
      if (productId) {
        this.productService.getProductById(productId).subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (err) => {
            console.error('商品取得エラー:', err);
          }
        });
      }
    });
  }
}
