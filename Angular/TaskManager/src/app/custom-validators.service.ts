import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService 
{

  constructor() { }

  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn
  {
    return (formGroup: FormGroup): ValidationErrors | null => 
    {
      if (!formGroup.get(controlToCompare).value)
        return null;
      
      if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value)
        return null;
      else
      {
        formGroup.get(controlToValidate).setErrors({
          compareValidator: {valid: false }});
        return { compareValidator: { valid: false } };
      }
    };
  }
}
