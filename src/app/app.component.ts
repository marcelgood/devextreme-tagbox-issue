import { Component, OnInit } from '@angular/core';

import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'devextreme-tagbox-issue';

  dataSource: DataSource;
  selectedItems = [];

  // Items with circular dependencies to demonstrate the tagbox issue
  items = [
    { name: 'One', owner: this },
    { name: 'Two', owner: this },
    { name: 'Three', owner: this }
  ];

  ngOnInit() {
    this.selectedItems = [this.items[0]];

    this.dataSource = new DataSource({
      load: loadOptions => this.items,
      byKey: key => key
    });
  }
}
