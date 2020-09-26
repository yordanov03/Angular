import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  

  ngOnInit(): void {
  }
  isInLoginMode = false;
  isLoading = false;
  error: string = null;

  onSwitchMode(){
    this.isInLoginMode = !this.isInLoginMode
    console.log(this.isInLoginMode)
  }

  onSubmit(form: NgForm){
    if(!form.valid){
        return;
    }

    this.isLoading = true;

    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    if(this.isInLoginMode){
      authObs = this.authService.login(email, password)
    }

    else{
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(resData=>{
      console.log(resData)
      this.isLoading = false;
      this.router.navigate(['/recipes'])
    }, errorMessage=>{console.log(errorMessage);
      this.error = errorMessage
      this.isLoading = false})

    form.reset();
}
}
