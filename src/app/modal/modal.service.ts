import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IModalData } from './modal.component';

@Injectable()
export class ModalService {
  #control$ = new Subject<IModalData | null>();

  public open(data: IModalData | null): void {
    this.#control$.next(data);
  }

  public close(): void {
    this.#control$.next(null);
  }

  public get modalSequence$(): Observable<any> {
    return this.#control$.asObservable();
  }
}
