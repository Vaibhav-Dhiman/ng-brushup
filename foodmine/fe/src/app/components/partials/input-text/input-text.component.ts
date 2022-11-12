import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() showErrorWhen: boolean = true;
  @Input() label!: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';

  get formControl() {
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
