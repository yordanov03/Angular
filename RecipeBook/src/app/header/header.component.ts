import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }
  private userSub = new Subscription;
  isAuthenticated = false;

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user=>{
      this.isAuthenticated = !!user
      console.log(!user);
      console.log(!!user)
    })
  }

  onLogout(){
    this.authService.logout();
  }

  onSave(){
    this.dataStorageService.storeRecipes()
  }

  onFetch(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
