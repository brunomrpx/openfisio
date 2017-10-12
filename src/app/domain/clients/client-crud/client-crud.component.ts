import { Component, ViewChild, OnInit } from '@angular/core';

import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { ClientListComponent } from '../client-list/client-list.component';

@Component({
  selector: 'app-client-crud',
  templateUrl: 'client-crud.component.html'
})
export class ClientCrudComponent implements OnInit {
  @ViewChild(ClientListComponent) clientListComponent: ClientListComponent;

  public clients: Client[] = [];

  constructor(private clientService: ClientService) {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  ngOnInit() {
    console.log('-> client list component: ', this.clientListComponent);
  }

  deleteClients() {
    const selectedClients = this.clientListComponent.selectedClients;

    this.clients = this.clients.filter(c => selectedClients.indexOf(c.id) < 0);
    this.clientListComponent.selectedClients = [];
  }
}
