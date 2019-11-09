import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import * as users from '../../../assets/users.json';
import {User} from '../model/user';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations:[
    trigger('fade',[
      state('void', style({
        opacity: 0
      })),
      transition(':enter',[
        animate(500, style({
          opacity: 1
        }))
      ]),
      transition(':leave',[
        animate(500, style({
          opacity: 0
        }))
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('activeLine', {static: false}) activeLine: ElementRef;
  toggle: string;
  showModal = false;
  users: User[] = (users as any).default;
  week: User[] = [];
  month: User[] = [];
  allUser: User[] = [];

  constructor() {}

  ngOnInit() {
    this.users.forEach(user => {
      this.allUser.push(user);
      if (user.filterDay === 'week') {
        this.week.push(user);
      } else if (user.filterDay === 'month') {
        this.month.push(user);
      }
    });
  }

  toggleFilter(toggle: string) {
    this.toggle = toggle;
    if (toggle === 'Last_day') {
      this.users = this.allUser;
      this.activeLine.nativeElement.style.left = '0px';
    } else if (toggle === 'Week') {
      this.activeLine.nativeElement.style.left = '88px';
      this.users = this.week;
    } else if (toggle === 'Month') {
      this.activeLine.nativeElement.style.left = '165px';
      this.users = this.month;
    }
  }

  ngAfterViewInit() {}
}
