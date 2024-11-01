import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {

  constructor(private router: Router ){}

  navigateHome() {
    this.router.navigate(['/'])
  }

}
