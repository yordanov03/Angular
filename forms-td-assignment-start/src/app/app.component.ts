import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultOption="Advanced";
formSubmitted = false;
@ViewChild('f',{static: false}) signupForm: NgForm;
user={
  email:'',
  level:'',
  password:''
}

onSubmit(){
  console.log(this.signupForm)
this.formSubmitted=true;
this.user.email=this.signupForm.value.userData.email;
this.user.level=this.signupForm.value.userData.level;
this.user.password = this.signupForm.value.userData.password;
this.signupForm.reset();
}
}
