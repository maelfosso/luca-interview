import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  error: string = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, password } = this.signInForm.value;

    if (username == 'luca' && password == 'test') {

    } else {
      this.error = "Wrong username/password";
    }
  }
}
