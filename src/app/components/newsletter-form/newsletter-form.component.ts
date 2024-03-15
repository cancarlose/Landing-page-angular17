import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from './../btn-primary/btn-primary.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;

  constructor() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
}
