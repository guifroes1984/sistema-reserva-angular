import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-inscrever-empresa',
  templateUrl: './inscrever-empresa.component.html',
  styleUrls: ['./inscrever-empresa.component.scss']
})
export class InscreverEmpresaComponent {
validarForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private notification: NzNotificationService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.validarForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      nome: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      telefone: [null], 
      password: [null, [Validators.required]], 
      verificarPassword: [null, [Validators.required]]
    })
  }

  enviaFormulario() {
    this.authService.registrarEmpresa(this.validarForm.value).subscribe(res => {
      this.notification.success(
        'SUCESSO', 
        'Inscrição bem sucedida', 
        {nzDuration: 5000}
      );
      this.router.navigateByUrl('/login');
    }, error => {
      this.notification
      .error(
        'ERROR', 
        `${error.error}`, 
        {nzDuration: 5000}
      )
    });
  }

}
