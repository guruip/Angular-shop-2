import { Component} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent {
  public myTitle = 'Ng Course';
  public myDrawer!: MatDrawer;

  public setSideNav(drawer: MatDrawer): void {
    this.myDrawer = drawer;
  }


}
