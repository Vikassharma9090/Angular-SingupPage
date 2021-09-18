import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Vikas Sharma First Angular App';
  //  Ternary Operator Angular Interpolation
  // title='';
  // video:string='plz scubscribe';
  // like:string='share with Social Media';

  // Function in Angular
  firstname:string='vikassharma';
  lastname:string='Offical';

  Something():string{
    return this.firstname+this.lastname
  }

}
