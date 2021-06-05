import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 1500,
    },
    {
      nombre: 'Vegeta',
      poder: 1100,
    },
  ];
  get personajes(): Personaje[] {
    // los ... hace rompe la variable por referencia. Vuelvo a construir la variable en otra.
    return [...this._personajes];
  }
  constructor() {
    console.log('servicio inicializado');
  }

  agregarPersonajes(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
