import { Component, effect, signal } from '@angular/core';
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

  count = signal(1)

  updateCount(){
    this.count.set(this.count()+1)
  }

  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }

  // handleCounter(para:string){
  //   if(para == "plus"){
  //     this.count = this.count + 1
  //   }
  //   else if (para == "minus"){
  //     this.count = this.count - 1
  //   }
  //   else {
  //     this.count = 0
  //   }
  // }

  handleEvent(event:any){
    console.log("Function called", event.type);
    // console.log("Function called", event.class);
  }

  getInput(event:any){
    console.log("event called", event.target.value);
  }



  name=""
  showName=""
  getName(event:Event){
    const val= (event.target as HTMLInputElement).value
    console.log(val);
    this.name=val;
    // this.name = event
  }

  
  displayName(){
    this.showName=this.name
  }

  display = true
  hide(){
    this.display=false
  }

  show(){
    this.display=true
  }

  toggle(){
    this.display=!this.display;
  }

  color = 1
  inputColor(event:Event){
    this.color = parseInt((event.target as HTMLInputElement).value)
    console.log(this.color);
    
  }

  a = [1,2,3,4]
  showNum(event:Event){
    
  }
}


