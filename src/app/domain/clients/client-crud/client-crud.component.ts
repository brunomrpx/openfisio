import { Component, ViewChild } from '@angular/core';

import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { headerTexts } from '../client.constant';
import { ClientListComponent } from '../client-list/client-list.component';
import { ClientFormComponent } from '../client-form/client-form.component';

@Component({
  selector: 'app-client-crud',
  templateUrl: 'client-crud.component.html'
})
export class ClientCrudComponent {
  @ViewChild(ClientListComponent) clientListComponent: ClientListComponent;
  @ViewChild(ClientFormComponent) clientFormComponent: ClientFormComponent;

  public clients: Client[] = [];
  public modalFormOpened = false;
  public headerTexts = headerTexts;

  constructor(private clientService: ClientService) {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  toggleModalForm() {
    if (this.modalFormOpened) {
      this.closeModalForm();
    } else {
      this.clientFormComponent.reset();
      this.openModalForm();
    }
  }

  openModalForm() {
    this.modalFormOpened = true;
  }

  closeModalForm() {
    this.modalFormOpened = false;
  }

  editClient() {
    this.clientFormComponent.reset();

    const selectedId = this.clientListComponent.selectedClients[0];
    const selectedClient = this.clients.find(c => c.id === selectedId);

    this.clientFormComponent.client = selectedClient;
    this.openModalForm();
  }

  deleteClients() {
    const selectedClients = this.clientListComponent.selectedClients;

    this.clients = this.clients.filter(c => selectedClients.indexOf(c.id) < 0);
    this.clientListComponent.selectedClients = [];
  }
}
