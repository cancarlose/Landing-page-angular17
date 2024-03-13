import { BtnPrimaryComponent } from './../btn-primary/btn-primary.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

}
