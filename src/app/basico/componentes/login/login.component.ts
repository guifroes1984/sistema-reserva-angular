import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private notification: NzNotificationService, 
    private router: Router) { 
  }
  
  ngOnInit() {
    this.validaForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submeterForm() {
    this.authService.login(this.validaForm.get(['userName'])!.value, this.validaForm.get(['password'])!.value)
    .subscribe(res => {
      console.log(res)
    }, error =>{
      this.notification
      .error(
        'ERRO', 
        'Credenciais incorretas',
        {nzDuration: 5000}
      )
    })
  }

}
