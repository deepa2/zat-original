import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "sidebar",
    templateUrl: "side-bar.html"
})
export class Sidebar {

    pages: any = [
        { title: 'Logout' },
        { title: 'Contact' }
    ];

    @Input() content: number;

    constructor() {


    }

}