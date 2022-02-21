import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-block-library',
  templateUrl: './block-library.component.html',
  styleUrls: ['./block-library.component.scss']
})
export class BlockLibraryComponent implements OnInit {
  currentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.currentForm = this.fb.group({
      howDoYouKnow: ['', [
        Validators.required,
        Validators.maxLength(254)
      ]],
    });
  }

  // Gets desired property from form, used in validation. Used to rewrite getters for form props.
  propOfForm(property: string) {
    return this.currentForm.get([property])!;
  }


}
