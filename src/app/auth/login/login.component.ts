import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoggedIn: Boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>\"'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}")
        ]]
    })
  }

  // getting form control names
  get formControl(){
    return this.loginForm.controls;
  }

  // login function
  onLogin():void{
    // check if the form is valid
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      localStorage.setItem("user-data", JSON.stringify(this.loginForm.value));
      this.router.navigate(["/"]);
      this.isLoggedIn = true;
    }
  }

}
