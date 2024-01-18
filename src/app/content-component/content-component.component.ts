import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './content-component.component.html',
  styleUrl: './content-component.component.css'
})
export class ContentComponentComponent {
  products: any;
  httpClient = inject(HttpClient);
  ngOnInit() : void{
    this.getProduct()
  }

  getProduct(){
    this.httpClient.get('https://dummyjson.com/products').subscribe((response: any) => {
      this.products = response.products;
    })
  }
}
