import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public activeItem = 1;
  constructor() { }

  ngOnInit() {
  }
  isActive(numberLi: number): void {
    this.activeItem = numberLi;
  }


}
