import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[<%= prefix.kebab %>ValidateEmail][ngModel],[<%= prefix.kebab %>ValidateEmail][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective {

  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  validate(c: FormControl) {
    return this.EMAIL_REGEXP.test(c.value) ? null : {
      <%= prefix.kebab %>ValidateEmail: {
        valid: false
      }
    };
  }
}
