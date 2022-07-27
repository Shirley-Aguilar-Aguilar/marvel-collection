import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-header';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  navData = navbarData;

  closeSession = () => {
    this.router.navigate(['/']);
  }

}
