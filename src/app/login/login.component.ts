import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  loginForm = new FormGroup ({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private apiService: ApiService , private router: Router) { }

  submit(f) {

    console.log(f.value);
    if (f.valid) {
     this.apiService.login(f.value).subscribe(res => {
       console.log(res.json().data);
       const token = res.json().data.token ;
       this.apiService.saveToken(token);
       this.router.navigateByUrl('');
   });
 }}

  ngOnInit() {
  }

}
