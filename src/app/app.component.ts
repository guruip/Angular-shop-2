import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myTitle: string = 'MyCourse';
  public myDrawer!: MatDrawer;

  public setSideNav(drawer: MatDrawer): void { 
    this.myDrawer = drawer;
  }

  public onClick(): void {
  }
  
}
