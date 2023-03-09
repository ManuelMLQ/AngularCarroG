import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Pais } from '../pais';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  pais: Pais | undefined;

  constructor(private cartService: CartService) {}

  eliminarToCart(pais: Pais) {
    this.items = this.cartService.deleteCartId(pais.name);
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required,Validators.minLength(8)])
  nameFormControl = new FormControl('', [Validators.required,Validators.minLength(3)])
  apellidoFormControl = new FormControl('', [Validators.required,Validators.minLength(3)])

  regimenseleccionado: string = 'Dictadura';
  regimenes: string[] = ['Dictadura', 'Monarquia', 'Republica'];
  matcher = new MyErrorStateMatcher(); //https://material.angular.io/components/checkbox/examples
  matcher2 = new MyErrorStateMatcher();

  isChecked: boolean = false;

  enviarDatos() {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    
    if(this.emailFormControl.errors == null && this.passwordFormControl.errors==null && this.nameFormControl.errors==null && this.apellidoFormControl.errors==null && this.isChecked){
      alert("Enviado")
    }else{
      alert("Fallo en la validacion")
    }

  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}






