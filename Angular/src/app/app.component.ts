import { Component } from '@angular/core';
import menuJson from '../app/menu.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){

  }
  sideButtons: any
  navMenu: any = menuJson
  ngOnInit(): void{
 this.sideButtons = menuJson;
 console.log(this.sideButtons,"this.sideButtons")
  }
}
