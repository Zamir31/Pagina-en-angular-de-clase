import { Component } from '@angular/core';
import { IEnlace } from '../IEnlace';
import { IEnlaces } from '../IEnlaces';

@Component({
  selector: 'app-enlaces-paginas-web',
  templateUrl: './enlaces-paginas-web.component.html',
  styleUrls: ['./enlaces-paginas-web.component.css']
})
export class EnlacesPaginasWebComponent implements IEnlace, IEnlaces {
  nombreLink: string = '';
  url: string = '';
  enlaces: IEnlace[] = [
    {
      nombreLink: 'Google',
      url: 'http://www.google.com',
    },
    {
      nombreLink: 'Github',
      url: 'http://www.github.com',
    }
  ];
  
  
}
