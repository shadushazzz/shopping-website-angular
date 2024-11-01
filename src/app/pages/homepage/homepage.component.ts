import { CommonModule, NgFor } from '@angular/common';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { filter, from, map, Observable, of, tap } from 'rxjs';
import { FetchProductsService } from '../../services/fetch-products.service';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { HeaderComponentComponent } from '../../components/header-component/header-component.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule , ProductsPageComponent , HeaderComponentComponent, NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {




  ngOnInit(): void {


  }
}






