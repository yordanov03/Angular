import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

singupForm: FormGroup;
statuses=['Stable', 'Critical', 'Finished']
forbiddenProjectNames=['Test']

ngOnInit(){

  this.singupForm = new FormGroup({
    'projectName': new FormControl(null, [Validators.required, this.forbiddenProjects.bind(this)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'status': new FormControl('critical')
  })
}

onSubmit(){
  console.log(this.singupForm.value);
}

forbiddenProjects(control: FormControl): {[s: string]: boolean} {
  if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true};
  }
  return null;
}
}
