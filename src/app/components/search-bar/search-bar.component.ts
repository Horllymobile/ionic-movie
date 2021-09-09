import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchKey = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onChange(event) {
    this.searchKey.emit(event.detail.value);
  }

}
