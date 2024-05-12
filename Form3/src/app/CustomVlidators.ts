import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
interface ForbiddenNameValidationResult {
  IsForbiddenname?: boolean; // Use '?' to mark it as optional
}
export class CustomValidators{
  
    static   forbiddenname(control: FormControl): { [s: string]: boolean } | null {
        if (control.value==="Test") {
          return { IsForbiddenName: true };
        }
        return null;
      }
    
      static forbiddenNameAsync: AsyncValidatorFn = 
      (control: AbstractControl): 
      Promise<ValidationErrors | null> => {
        return new Promise<ValidationErrors | null>
        ((resolve, reject) => {
          setTimeout(() => {
            if (control.value === "Batata") {
              resolve({ IsForbiddenname: true });
            } else {
              resolve(null);
            }
          }, 1500);
        });
      }
} 