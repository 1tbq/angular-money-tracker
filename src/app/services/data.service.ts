import {
  Injectable, OnInit
} from '@angular/core';
import {
  NavigationStart,
  Router
} from '@angular/router';
import {
  RestApiService
} from './rest-api.service';
import {
  JsonPipe
} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService  {
  message: string = '';
  messageType = 'danger';
  user: any;

  cartItems_quantity;

  constructor(
      private router: Router,
      private rest: RestApiService
  ) {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              this.message = '';
          }
      });
      this.getProfile();
  }



  error(message) {
      this.message = message;
      this.messageType = 'danger';
  }
  success(message) {
      this.message = message;
      this.messageType = 'success';
  }
  warning(message) {
      this.message = message;
      this.messageType = 'warning';
  }

  async getProfile() {
      try {
          const token = localStorage.getItem('jwt_token');
          if (token) {
              const data = await this.rest.get('http://localhost:3030/auth/profile');
              this.user = data['user'];
          }
      } catch (error) {
          this.error(error);
      }
  }

  get_products_in_cart() {
      const products_in_cart = localStorage.getItem('products_in_cart');
      return products_in_cart ? JSON.parse(products_in_cart) : [];
  }
  addToCart(item:string) {
    const products_in_cart:any = this.get_products_in_cart();
    if(products_in_cart.find(data=>JSON.stringify(data) === JSON.stringify(item))) {
      return false;
    }else{
      products_in_cart.push(item);
      this.cartItems_quantity++;
      localStorage.setItem('products_in_cart',JSON.stringify(products_in_cart));
      return true;
    }
  }
  clearCart() {
    this.cartItems_quantity = 0;
    localStorage.setItem('products_in_cart','[]');
  }
  removeFromCart(item:string) {
    let products_in_cart = this.get_products_in_cart();
    if(products_in_cart.find(data=> JSON.stringify(data)===JSON.stringify(item))){
      products_in_cart = products_in_cart.filter(data=>JSON.stringify((data)!= JSON.stringify(item)));
      this.cartItems_quantity --;
      localStorage.setItem('products_in_cart',JSON.stringify(products_in_cart)); 
    }
  }

}