import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorField } from '../../../helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
  export class PerfilComponent implements OnInit {

    form!: FormGroup;
  
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.validation();
    }
  
    private validation(): void {
      const formOptions: AbstractControlOptions = {
        validators: ValidatorField.MustMatch('password', 'confirmPassword')
      };
  
      this.form = this.fb.group({
        title: ['', Validators.required],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telephone: ['', [Validators.required]],
        description: ['', Validators.required],
        function: ['', Validators.required],
        password: ['', [Validators.minLength(6), Validators.nullValidator]],
        confirmPassword: ['', Validators.nullValidator]
      }, formOptions);
    }
  
    // Conveniente para pegar um FormField apenas com a letra F
    get f(): any { return this.form.controls; }
  
    onSubmit(): void {
  
      // Vai parar aqui se o form estiver inválido
      if (this.form.invalid) {
        return;
      }
    }
  
    public resetForm(event: any): void {
      event.preventDefault();
      this.form.reset();
    }
  }

