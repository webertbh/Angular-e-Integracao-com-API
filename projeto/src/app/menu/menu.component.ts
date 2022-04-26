import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!:MenuItem[]

  ngOnInit(){
    this.items = [{
      label: 'Home',
      items: [
          {label: 'Home', icon: 'pi pi-home', routerLink:'home'},
      ]
  },
  {
     label: 'Usuario',
     icon: 'pi pi-user', 
     routerLink:'usuario'
      
  }];

  }

}
