import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  userForm!: FormGroup;
  addressFormGroupKey = 'address';
  isFormSubmitted = false;

  get firstName() { return this.userForm.get('firstName') }
  get lastName() { return this.userForm.get('lastName') }

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  saveUserForm() {
    debugger
    this.isFormSubmitted = true;
  }

  formInitialized(name: string, form: FormGroup) {
    debugger
    this.userForm.setControl(name, form);
  }

}
