import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blueHawk';

  colors: any = {
    primary: '#0ABFAB',
    secondary: '#E3E3E3',
    inputback: '#F3F3F3',
    textGrey: '#B7B7B7',
    textActive: '#2BD3C6',
    success: '#83F48F',
  };
  constructor(private router: Router) {
    for (const colorName in this.colors) {
      document.documentElement.style.setProperty(
        `--${colorName}`,
        this.colors[colorName]
      );
    }
    this.router.navigate(['']);
  }
}
