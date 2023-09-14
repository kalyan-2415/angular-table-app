import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  items = [
    {
      accountNumber: '12345',
      typeOfAccount: 'Savings',
      place: 'City',
      amount: 1000,
      dateOfCreation: '2023-09-14',
      selected: false
    },
    // Add more items here
  ];

  newItems = [];

  selectAll(checked: boolean) {
    for (const item of this.items) {
      item.selected = checked;
    }
  }

  selectItem(index: number, checked: boolean) {
    this.items[index].selected = checked;
  }

  addToNewTable(index: number) {
    if (this.items[index].selected) {
      this.newItems.push(this.items[index]);
      this.items[index].selected = false;
    }
  }

  removeFromNewTable(index: number) {
    this.newItems.splice(index, 1);
  }
}
