import { Component, Input } from '@angular/core';

import { Client } from '../client.model';
import { INglDatatableRowClick } from 'ng-lightning';

@Component({
  selector: 'app-client-list',
  templateUrl: 'client-list.component.html'
})
export class ClientListComponent {
  @Input() clients: Client[] = [];

  public selectedClients = [];

  toggleRowSelection($event: INglDatatableRowClick) {
    $event.event.preventDefault();

    const id = $event.data.id;
    const selectedIndex = this.selectedClients.indexOf(id);

    if (selectedIndex >= 0) {
      this.selectedClients.splice(selectedIndex, 1);
    } else {
      this.selectedClients.push(id);
    }
  }

  toggleSelectAll(selectAll: boolean) {
    let selectedClients = [];

    if (selectAll) {
      selectedClients = this.clients.map(c => c.id);
    }

    this.selectedClients = selectedClients;
  }
}
