import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig  ,BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/service/evento.service';
import { DatePipe } from '@angular/common';
import { Lote } from 'src/app/models/Lote';

@Component({
  selector: 'app-evento-detalhes',
  templateUrl: './evento-detalhes.component.html',
  styleUrls: ['./evento-detalhes.component.scss'],
  providers: [ DatePipe ]
  
})
export class EventoDetalhesComponent implements OnInit {


  evento = {} as Evento;
  form!: FormGroup;
  estadoSalvar = 'post';

  get modoEdit(): boolean{
    return this.estadoSalvar === 'put'
  }

  get lotes(): FormArray {
    return (this.form.get('lotes') as FormArray)
  }

  get f(): any {
    return this.form.controls;
  }

  get bsConfig(): any {
    return {
      isAnimated: true,
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY hh:mm a',
      showWeekNumbers: false
    };
  }


  constructor(private fb: FormBuilder,
              private localeService: BsLocaleService,
              private activatedRoute: ActivatedRoute,
              private eventoService: EventoService,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService,
              private router: Router)
  {
    this.localeService.use('pt-br');
  }

  public carregarEvento(): void {
    const eventoIdParam = this.activatedRoute.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {
      this.spinner.show();

      this.estadoSalvar = 'put';

      this.eventoService.GetEventoById(+eventoIdParam).subscribe(
        (evento: Evento) => {
          this.evento = {...evento};
          this.form.patchValue(this.evento);
        },
        (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao tentar carregar Evento.', 'Erro!');
          console.error(error);
        },
        () => this.spinner.hide(),
      );
    }
  }

  ngOnInit(): void {
    this.carregarEvento();
    this.validation();
  }

  public validation(): void {
    this.form = this.fb.group({
      tema: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      local: ['', Validators.required],
      dataEvento: ['', Validators.required],
      qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      imagemURL: ['', Validators.required],
    });
  }

  addLote(): void {
    this.lotes.push(this.criarLote({id: 0} as Lote));
  }

  criarLote(lote: Lote): FormGroup {
      return this.fb.group({
        id: [lote.id],
        nome: [lote.nome,Validators.required, Validators.minLength(4), Validators.maxLength(20)],
        quantidade: [lote.quantidade, Validators.required],
        preco: [lote.preco , Validators.required],
        dataInicio: [lote.dataInicio],
        dataFim: [lote.dataFim],
    }) 
  }


  public resetForm(): void {
    this.form.reset();
  }

  public cssValidator(campoForm: FormControl | AbstractControl ): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

  public salvarEvento(): void {
    this.spinner.show();
    if (this.form.valid) {

      this.evento = (this.estadoSalvar === 'post')
                ? {...this.form.value}
                : {id: this.evento.id, ...this.form.value};

      this.eventoService[this.estadoSalvar](this.evento).subscribe(
        (eventoRetorno: Evento) => {
          this.toastr.success('Evento salvo com Sucesso!', 'Sucesso');
          this.router.navigate([`eventos/detalhe/${eventoRetorno.id}`]);
        },
        (error: any) => {
          console.error(error);
          this.spinner.hide();
          this.toastr.error('Error ao salvar evento', 'Erro');
        },
        () => this.spinner.hide()
      );
    }
  }
}