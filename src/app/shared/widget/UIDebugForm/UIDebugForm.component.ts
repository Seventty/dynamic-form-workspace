import { Component, Input, OnInit, isDevMode } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'UIDebugForm',
  templateUrl: './UIDebugForm.component.html',
  styleUrls: ['./UIDebugForm.component.sass']
})
export class UIDebugFormComponent implements OnInit {
  @Input() formModel?: FormGroup
  formStatus?: string = ''
  isDev = isDevMode();

  constructor(private formGroupDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroupDirective.control.statusChanges.subscribe(status => this.formStatus = status);
  }

}
