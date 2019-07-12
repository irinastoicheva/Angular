import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  form: FormGroup;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0.00000001)]],
      imageUrl: ['', Validators.required],
      material: ['', Validators.nullValidator]
    });
  }

  createFurniture() {
    console.log(this.form);
  }

  get f() {
    return this.form.controls;
  }
}
