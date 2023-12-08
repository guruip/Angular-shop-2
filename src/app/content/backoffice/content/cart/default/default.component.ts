import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { Person } from '../cart.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  @Input()
  public user!: Person;

  constructor(
    private cdr: ChangeDetectorRef,
    // private zone: NgZone,
  ) {
    this.cdr.detach();
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 11000);

    // vk.getUser((user) => {
    //   this.zone.run(() => {
    //     this.user = user;
    //   });
    // });
  }

  ngOnInit(): void {
  }

}
