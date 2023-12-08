import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  template: `
    <div appHidden #cH="hiddenControl"></div>
    <span class="hide" (click)="cH.hide()"></span>
    <span class="show" (click)="cH.show()"></span>
  `
})
export class TestComponent {
}


describe('Hidden Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });
  it('should show and hide element', () => {
    const element = fixture.debugElement.query(By.directive(HiddenDirective));
    const hidenCntrl = fixture.debugElement.query(By.css('.hide'));
    const showCntrl = fixture.debugElement.query(By.css('.show'));
    expect(element).toBeDefined();
    expect(hidenCntrl).toBeDefined();
    expect(showCntrl).toBeDefined();
    hidenCntrl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('hidden');
    showCntrl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('visible');
  });
});
