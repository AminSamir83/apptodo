import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private apiService: ApiService, private router: Router) { }
  registerForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    lastname: new FormControl ('', Validators.required),
    email: new FormControl ('', [Validators.email, Validators.required]),
    password : new FormControl ('', [Validators.required, Validators.minLength(5)])
  });

  getFormValue(f) {
    if (f.valid) {
    // console.log(f.value);
    // console.log(f.valid);
    this.apiService.addUser(f.value).subscribe(res => {
      // console.log(res.json().data);
      if (res.json().status === 401) {
        this.router.navigateByUrl('/login');
        console.log(res.json().message);
      } else {
          let token = res.json().data;
          this.apiService.saveToken(token);
          // this.router.navigateByUrl('/login');
          this.router.navigateByUrl(''); }
          console.log(res.status);
    });
  }
  }

  getErrorMessage (f) {

    return  f.hasError('required') ? 'You must enter a value' :
            f.hasError('email') ? 'Not a valid email' :
            f.hasError('minlength') ? 'Password must contain at least 5 characters' :
            '' ;

  }


  ngOnInit() {
  }

}
