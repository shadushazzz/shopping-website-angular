import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { FetchProductsService } from './services/fetch-products.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent,  HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[FetchProductsService]
})
export class AppComponent implements OnInit {


  accessVal  = (a:Event)  => {
    console.log(a)
       }

       constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url); // Check the current URL
      }
    });

  }


}
