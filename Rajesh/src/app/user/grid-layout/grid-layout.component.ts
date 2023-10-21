import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss'],
})
export class GridLayoutComponent {
  isGrid: boolean = false;
  items: any = [];
  constructor(private router: Router, private user: UserDetailsService) {
    this.items = this.user.getUserList();
  }
  navigateTo() {
    this.router.navigate(['/create']);
  }
}
