import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private animationCtrl: AnimationController) {}

  ngAfterViewInit(){

    const animation = this.animationCtrl.create()

    .addElement(document.querySelector('.square'))
    .duration(5000)
    .iterations(Infinity)
    .keyframes([
    { offset: 0, transform: 'scale(1))', opacity: '0.5' },
    { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
    { offset: 1, transform: 'scale(1)', opacity: '0.5' }
    ]);



    animation.play()
  }



  Nombre="¡Queremos gritar a los cuatro vientos lo que Cristo nos revela en el secreto de nuestra intimidad!"

}
