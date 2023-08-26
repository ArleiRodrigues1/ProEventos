import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title!: string;
  @Input() subTitle!: 'Desde 2023';
  @Input() botaoListar = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  list(): void{
    this.router.navigate([`/${this.title.toLocaleLowerCase()}/lista`]);
  }

  showList(): boolean{
    return this.router.url !== '/eventos/lista';
    }
  }

  