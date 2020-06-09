import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultQuestion: string= 'pet'
  genders = ['male', 'female']
  user = {
    username: '',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  };
  formSubmitted = false;
  defaultGender='male'


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmit(){
    this.formSubmitted=true;
    this.user.username=this.signupForm.value.userData.username;
    this.user.email=this.signupForm.value.userData.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // onSubmitVC(){
  //   console.log(this.signupForm)
  // }
}
