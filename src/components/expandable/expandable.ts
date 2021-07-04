import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;

  experienceForm: FormGroup;
  minDate: string;
  maxDate: string;

  constructor(private renderer: Renderer, private formBuilder: FormBuilder) {

    this.experienceForm = this.formBuilder.group({
      preOrganizationName: ['', Validators.required],
      expLetter: ['', Validators.required],
      relieveLetter: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      designation: ['', Validators.required]
    });

    this.maxDate = moment.utc().subtract(18, 'years').format('YYYY-MM-DD');
    this.minDate = moment.utc().subtract(58, 'years').format('YYYY-MM-DD');
  }

  // ngAfterViewInit() {
  //   this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
  // }


}
