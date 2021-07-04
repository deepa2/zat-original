//https://competenepal.com/elastic-text-area-component-in-ionic-framework/

import { Directive, ElementRef } from '@angular/core';
import { TextInput } from 'ionic-angular';

@Directive({
    selector: "[elasticTextArea]"
})

export class ElasticTextArea {


    constructor(private textInput: TextInput, private el: ElementRef) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.textInput.ngControl.valueChanges.subscribe((inputValue: any) => {
                this.resize();
            });
        });
    }

    resize() {
        let textArea = this.textInput._elementRef.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    }



}
