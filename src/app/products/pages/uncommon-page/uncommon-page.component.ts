import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Augusto';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient(): void {
    this.name = 'Fernanda';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Augusto', 'Fernanda', 'Pedro', 'Juan', 'Marta'];
  public clientsMap: Record<string, string> = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Augusto',
    age: 25,
    address: 'Calle 123',
  };

  //Async Pipe
  public myObservableTime: Observable<number> = interval(4000);

  public myPromiseValue: Promise<string> = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
