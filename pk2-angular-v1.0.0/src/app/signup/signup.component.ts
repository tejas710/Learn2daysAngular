import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    title: string = 'My first AGM project';
    lat: number = 51.678418;
    lng: number = 7.809007;
    constructor() { }

    ngOnInit() {}
}
