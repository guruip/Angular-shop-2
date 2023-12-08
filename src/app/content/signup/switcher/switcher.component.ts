import { Component, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SwitcherBaseComponent } from './switcher-base.component';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent extends SwitcherBaseComponent {

  @HostListener('click')
  public toggle(): void {
    super.toggle();
  }
}
