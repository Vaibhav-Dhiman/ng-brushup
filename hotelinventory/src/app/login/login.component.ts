import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly loginService: LoginService, private readonly router: Router) { }
  model = {
    username: '',
    password: ''
  };
  ngOnInit() {
  }

  submit(form: any) {
    if(this.loginService.login(form.value.email, form.value.password)) {
      this.router.navigate(['/rooms']);
    }
  }
}
