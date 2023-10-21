import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  constructor(private router: Router) {}
  jsonData = {
    data: [
      {
        type: 'image',
        src: '',
        alt: 'Logo',
        onclick: 'route',
        path: '/dashboard',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/dashboard',
        prefix: 'assets/icons/grid-outline.svg',
        text: 'Dashboard',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/reader-outline.svg',
        text: 'Project',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/briefcase-outline.svg',
        text: 'Department',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/people.svg',
        text: 'User',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/airplane-outline.svg',
        text: 'Flight Planning',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/images-outline.svg',
        text: 'Workspace',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/browsers-outline.svg',
        text: 'Asset',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/add-circle-outline.svg',
        text: 'Vendor',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/cash-outline.svg',
        text: 'Client',
      },
      {
        type: 'button',
        onclick: 'route',
        path: '/create',
        prefix: 'assets/icons/location-outline.svg',
        text: 'Location',
      },
    ],
    heightUnit: 10,
  };
  clickhandler(item: any) {
    if (item.onclick == 'route') this.navigateTo(item.path);
  }
  navigateTo(item: string) {
    this.router.navigate([item]);
  }
}
