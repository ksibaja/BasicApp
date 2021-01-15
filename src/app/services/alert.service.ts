import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSwalMixinTopEnd(msg: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
    Toast.fire(msg, '', 'success');
  }

  showSwalMixinTop(msg: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    Toast.fire(msg, '', 'info');
  }

  showSwalFire(msg: string): void {
    Swal.fire(
      msg,
      '',
      'success'
    )
  }

}
