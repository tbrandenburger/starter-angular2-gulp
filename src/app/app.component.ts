import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent implements OnInit{

    ngOnInit():void {
        console.log("Angular 2 is running");
    }

}
