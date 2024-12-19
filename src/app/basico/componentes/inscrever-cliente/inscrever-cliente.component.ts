import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrever-cliente',
  templateUrl: './inscrever-cliente.component.html',
  styleUrls: ['./inscrever-cliente.component.scss']
})
export class InscreverClienteComponent {

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
      sobreNome: [null, [Validators.required]],
      telefone: [null], 
      password: [null, [Validators.required]], 
      verificarPassword: [null, [Validators.required]]
    })
  }

  enviaFormulario() {
    this.authService.registrarCliente(this.validarForm.value).subscribe(res => {
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
