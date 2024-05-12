import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'dns';
import { CustomValidators } from './CustomVlidators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Form3';
  forbiddenName = ['Test'];
  // forbiddenNameAsyc = ['Batata'];
  ngOnInit(): void {}
  form: FormGroup = new FormGroup({
    // 'ProjectName': new FormControl(null, [
    //   Validators.required,
    //   CustomValidators.forbiddenname,
    //   CustomValidators.forbiddennameAsync],
    // ),
    email: new FormControl(null, [Validators.required, Validators.email]),
    ProjectStatus: new FormControl(null, Validators.required),
    ProjectName: new FormControl(null, {
      validators: [Validators.required, CustomValidators.forbiddenname],
      asyncValidators: [CustomValidators.forbiddenNameAsync],
      // nonNullable: true,
      // updateOn: 'change',
    }),
  });
  OnSubmit() {
    console.log(this.form.value);
  }

  intialize(item: any | undefined) {
    let form: FormGroup = new FormGroup({
      firstName: new FormControl(item?.firstName),
    });
  }
}
// // static forbiddennameAsync(
//   //   control: FormControl
//   // ): Promise<AsyncValidatorFn | null> | Observable<any> {

//   // }
//   static checkIfUsernameExists(control: FormControl): AsyncValidatorFn {
//     return (control: AbstractControl): Observable<ValidationErrors> => {
//       return userService
//         .checkIfUsernameExists(control.value)
//         .pipe(
//           map((result: boolean) =>
//             result ? { usernameAlreadyExists: true } : null
//           )
//         );
//     };
//   }
// } //AsyncValidatorFn
