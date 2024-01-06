import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],

  template: `<h1>Inside Demo Component</h1>
  <input type = "text">
  <h2 [class] = "'name'">{{Name}}</h2>`,

  styles: `.name
        {
           color : blue;
        }`
})
export class DemoComponent {

  public Name : string = "Marvellous Infosystem"

}
