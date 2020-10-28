import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthModule } from './components/auth/auth.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpIntercepterService } from './services/http-intercepter.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoriesComponent } from './components/shop/categories/categories.component';
import { MessageComponent } from './components/message/message.component';
import { PostProductComponent } from './components/shop/post-product/post-product.component';
import { ProfileComponent } from './components/shop/profile/profile.component';
import { SettingsComponent } from './components/shop/settings/settings.component';
import { AddressComponent } from './components/shop/address/address.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { MyProductsComponent } from './components/shop/my-products/my-products.component';
import { ProductComponent } from './components/shop/product/product.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SearchComponent } from './components/shop/search/search.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { MyOrdersComponent } from './components/shop/my-orders/my-orders.component';
import { MyOrderComponent } from './components/shop/my-order/my-order.component';
import { MoneyTrackerComponent } from './components/money-tracker/money-tracker.component';
import { IncomeComponent } from './components/money-tracker/income.component';
import { ExpensesComponent } from './components/money-tracker/expenses.component';
import { TictactoeComponent } from './components/tictactoe/tictactoe.component';
import { SnakeComponent } from './components/snake/snake.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BlogComponent,
    PortfolioComponent,
    LandingPageComponent,

    NavbarComponent,
    ShopComponent,
    CategoriesComponent,
    MessageComponent, 
    PostProductComponent, 
    ProfileComponent, 
    SettingsComponent, 
    AddressComponent, 
    CategoryComponent, 
    MyProductsComponent, 
    ProductComponent, 
    ProjectsComponent, 
    SearchComponent, 
    CartComponent, 
    MyOrdersComponent, 
    MyOrderComponent, 
    MoneyTrackerComponent, 
    IncomeComponent, ExpensesComponent, TictactoeComponent, SnakeComponent, CalculatorComponent,
    
  ],  
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterService,multi:true},
      // {provide: NgbDateAdapter, useClass: DatepickerAdapterService},
    //  {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
