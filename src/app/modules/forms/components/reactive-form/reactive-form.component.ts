import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  /// example two
  typedForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', Validators.required)
  });
  submittedData: string = "We are testing Reactive Typed Forms! ";
  onSubmit() {
    if (!this.typedForm.valid) {
      this.submittedData = "Mandatory Fields needs to be filled";
    } else {
      this.submittedData = `Name : ${this.typedForm.value.name}, Email : ${this.typedForm.value.email}, Message : ${this.typedForm.value.message}`;
    }
  }
  onResetSubmit() {
    this.typedForm.reset();
    this.submittedData = "We are testing Reactive Typed Forms!";
  }
}
