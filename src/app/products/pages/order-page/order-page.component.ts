import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
})
export class OrderPageComponent {
  public isUpperCase: boolean = false;
  public sortBy?: keyof Hero | '';
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: false,
      color: Color.green,
    },
  ];

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public handleSort(sortBy: keyof Hero): void {
    this.sortBy = sortBy;
  }
}
