import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { username, password } = this.signInForm.value;

    if (username == 'luca' && password == 'test') {
      localStorage.setItem("connected", 'true');

      this.router.navigate(['/', 'publications']);
    } else {
      this.error = "Wrong username/password";
    }
  }
}
