import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorage } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorage) { }

  ngOnInit(): void {}

  onSave(){
    this.dataStorageService.storeRecipes()
  }

  onFetch(){
    this.dataStorageService.fetchRecipes();
  }
}
