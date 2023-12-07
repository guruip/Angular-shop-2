import { Component, ContentChild, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', {static: true})
  public sideMenu!: MatDrawer;

  @ViewChild('contentBlock', {static: true, read: ViewContainerRef})
  public block!: ViewContainerRef;

  @ContentChild('contentTemplate', {static: true})
  public contentTmpl!: TemplateRef<any>;

  ngOnInit(): void {
    this.block.createEmbeddedView(this.contentTmpl);
    this.setSideNavControl.emit(this.sideMenu);
  }

}
