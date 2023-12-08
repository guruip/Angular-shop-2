import { Injectable } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class SwitcherBaseComponent implements ControlValueAccessor {
  public internalValue!: boolean;
  protected onChangeCb!: (checked: boolean) => void;

  public toggle(): void {
    this.internalValue = !this.internalValue;
    this.onChangeCb(this.internalValue);
  }

  public writeValue(checked: boolean): void {
    this.internalValue = checked;
  }

  public registerOnChange(fn: (checked: boolean) => void): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(_fn: any): void {
  }

}
