import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
    this.getDetailProductId(Number(id))
  }
  getDetailProductId(id: number){
    this.httpClient.get(`https://dummyjson.com/products/${id}`).subscribe((response:any) => {
      this.product = response;
    });
  }
}
