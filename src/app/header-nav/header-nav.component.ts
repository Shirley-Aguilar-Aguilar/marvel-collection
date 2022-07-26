import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-header';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navData = navbarData;

}
