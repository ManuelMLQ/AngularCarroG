import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiBebidasService } from '../api-bebidas.service';
import { Product, products } from '../products';
import { Pais } from '../pais';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  /*product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }*/
  pais: Pais | undefined;
  myData$: any;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private ApiBebidasService: ApiBebidasService
  ) {}

  addToCart(pais: Pais) {
    this.cartService.addToCart(pais);
    window.alert('El pais se añadio al carro!');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('paisId');
    console.log(productIdFromRoute);

    this.ApiBebidasService.getData().subscribe((response) => {
      this.myData$ = response;

      for (let i = 0; i < this.myData$.length; i++) {
        if (this.myData$[i].name == productIdFromRoute) {
          this.pais = {
            name: this.myData$[i].name,
            image: this.myData$[i].flags.png,
            region: this.myData$[i].region,
            population: this.myData$[i].population,
            numericcode: this.myData$[i].numericCode,
          };
        }
      }
    });
  }
}
