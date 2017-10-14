import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { Client } from './client.model';

@Injectable()
export class ClientService {
  public clients = new BehaviorSubject<Client[]>([
    { id: 1, name: 'Karan Morphis', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 2, name: 'Eugenie Ardis', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 3, name: 'Asley Canela', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 4, name: 'Raul Kocian', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 5, name: 'Silvia Poteet', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 6, name: 'Farah Lackey', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 7, name: 'Ressie Weinert', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 8, name: 'Louis Bodenhamer', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 9, name: 'Hong Willams', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 10, name: 'Yoshie Stacy', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 11, name: 'Elina Saar', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 12, name: 'Leandro Adger', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 13, name: 'Anne Wight', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 14, name: 'Mi Stender', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 15, name: 'Breana Morgenstern', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 16, name: 'Janean Yarber', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 17, name: 'Angelena Pizarro', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 18, name: 'Versie Donati', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 19, name: 'Doris Bosh', cpf: '123.543.123-90', rg: '1230092345' },
    { id: 20, name: 'Ngan Strader', cpf: '123.543.123-90', rg: '1230092345' }
  ]);

  retrieve() {
    return this.clients;
  }

  create(client: Client) {
    const currentValue = this.clients.value;

    client.id = +new Date();

    this.clients.next([...currentValue, client]);
  }

  delete(clientIds: number[]) {
    const currentValue = this.clients.value;
    const newValue = currentValue.filter(c => clientIds.indexOf(c.id) < 0);

    this.clients.next(newValue);
  }

  update(client: Client) {
    const currentValue = this.clients.value;
    const foundClient = currentValue.find(c => c.id === client.id);
    const index = currentValue.indexOf(foundClient);

    currentValue[index] = Object.assign({}, foundClient, client);
  }
 }
