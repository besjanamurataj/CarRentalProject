import { AccountService } from './../../core/service/account.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MESSAGE_INSERT_PASSWORD,
  MESSAGE_INSERT_USERNAME,
  MESSAGE_VALID_PASSWORD,
} from '../account.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerOverlayService,
    private toastr: ToastrService,
    private accoutService: AccountService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, ,Validators.minLength(6)]],

    });

  }

  login() {
    if (this.username.hasError('required')) {
      this.toastr.error(MESSAGE_INSERT_USERNAME);
      return;
    }
    if (this.password.hasError('required')) {
      this.toastr.error(MESSAGE_INSERT_PASSWORD);
      return;
    }
     if(this.password.hasError('minlength')){
      this.toastr.error( MESSAGE_VALID_PASSWORD);
     return;
    }

    this.accoutService
      .login(this.username.value, this.password.value)
      .subscribe((data) => {
        this.router.navigate(['/home']);
        console.log(data);

      }),(error)=>{
        console.error(error);
      };

    // this.spinner.show();

  }

  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
