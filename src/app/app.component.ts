import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  newDate = new Date();
  userObject = {
    name: 'Majima',
    age: '35',
    id: 0
  }
  private api = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'

  constructor(private httpService: HttpService) {
   }
  
   getDolar() {
     this.httpService.getRequest(this.api).subscribe(data => {
       let valor = data.USDBRL.bid
       console.log(valor)
      })
     
     
   }

  handleEvent(event: any) {
    console.log(event)
  }
}
