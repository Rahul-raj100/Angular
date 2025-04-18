import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, NavbarComponent, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-app';
  x = 20;
  y = 30;

  onClick(){
    alert("function called");
    this.onDoubleClick();
  }

  onDoubleClick(){
    console.log("other function");
  }

  count = 0

  handleCounter(para:string){
    if(para == "plus"){
      this.count = this.count + 1
    }
    else if (para == "minus"){
      this.count = this.count - 1
    }
    else {
      this.count = 0
    }
  }

  handleEvent(event:any){
    console.log("Function called", event.type);
    // console.log("Function called", event.class);
  }

  getInput(event:any){
    console.log("event called", event.target.value);
  }
}
