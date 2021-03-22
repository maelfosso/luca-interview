import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const connected = JSON.parse(localStorage.getItem("connected"));

    if (connected) {
      this.isConnected = true;
    } else {
      this.isConnected = false;
    }
  }

  onLogout() {
    localStorage.removeItem("connected");

    this.router.navigate(['/auth/sign-in']);
  }

}
