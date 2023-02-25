import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/modules/shared/models/User';

@Component({
  selector: 'app-user-address-info',
  templateUrl: './user-address-info.component.html',
  styleUrls: ['./user-address-info.component.css']
})
export class UserAddressInfoComponent implements OnChanges, OnInit {

  addressForm!: FormGroup;
  @Output() formCreated = new EventEmitter<FormGroup>();
  @Input() isFormSubmitted: any;
  @Input() user!: User;
  get street() { return this.addressForm.get('street') }
  get city() { return this.addressForm.get('city') }
  get state() { return this.addressForm.get('state') }
  get zip() { return this.addressForm.get('zip') }
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  buildForm() {
    this.addressForm = this.formBuilder.group({
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'street': [null, Validators.required],
      'zip': [null],
    });
  }

  ngOnInit() {
    this.formCreated.emit(this.addressForm);
  }

  ngOnChanges(changes: SimpleChanges) {
    debugger
    if (changes && changes['user'] && !changes['user'].firstChange) {
      this.addressForm.patchValue({
        state: this.user.state,
        city: this.user.city,
        street: this.user.street,
        zip: this.user.zip
      })
    }
  }

}
