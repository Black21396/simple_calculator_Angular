import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result :string ="";


  getChar(i: any){
    this.result+= i;
  }

  clearResult(){
    this.result = "";
  }

  showResult(){
    this.result = eval(this.result);
  }
}
