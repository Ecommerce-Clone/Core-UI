import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  user: User = new User('', '', 0, '');
  message: any;

  ngOnInit(): void {}

  constructor(private userservice: UserRegService) {}

  public signUp() {
    let response = this.userservice.register(this.user);
    response.subscribe((data) => (this.message = data));
  }
}
