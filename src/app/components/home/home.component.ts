import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";

@Component({
    selector: 'app-home',
    standalone: true,
    providers: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        HeaderComponent,
        NgOptimizedImage,
        BtnPrimaryComponent
    ]
})
export class HomeComponent {

}
