import { $locationShim } from '@angular/common/upgrade';
import { Component, VERSION } from '@angular/core';
import { ICatalogue, IProduit } from './models/factory.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Angular ' + VERSION.major;
  public productName: string[] = [
    'toy1',
    'toy2',
    'toy3',
    'toy4',
    'toy5',
    'toy6',
    'toy7',
    'toy8',
    'toy9',
    'toy10',
  ];
  public ref = [];
  public catalogue: ICatalogue = {
    listeProduits: [],
  };

  constructor() {}

  public getNumbers(): string {
    let num: number;
    let ref = '';
    for (let i = 0; i < 3; i++) {
      num = Math.round(Math.random() * 9);
      //num = Math.round(num);
      ref = ref + num;
    }
    return ref;
  }

  public getLetters(): string {
    let alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ref = '';
    let letter: string;
    for (let i = 0; i < 3; i++) {
      letter = alphabet[Math.round(Math.random() * (alphabet.length - 1))];
      ref = ref + letter;
    }
    return ref;
  }

  public getReference() {
    let reference: string;
    reference = this.getLetters() + this.getNumbers();
    console.log(reference);
    return reference;
  }

  public generateProduct() {
    let prod: string =
      this.productName[
        Math.round(Math.random() * this.productName.length)
      ].toString();
    let idProd: number = Math.round(Math.random() * 50);
    //this.catalogue.push(prod)
    this.catalogue.listeProduits.push({
      id: idProd,
      name: prod,
      reference: this.getReference(),
    });
    console.log(idProd, prod, this.getReference());
    //console.log();
    console.log(this.catalogue);
  }
}
