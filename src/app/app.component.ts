import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private http: HttpClient){}
  userArr:{id:number, title:string, body:string}[] = [];

  onFetch(){
    return this.http.get<{id:number, title:string, body:string}[]>('https://jsonplaceholder.typicode.com/posts')
    // .pipe(
    //   map( resArr => {
    //     for(let key in resArr){
    //       this.userArr.push(resArr[key])
    //     }
    //     return resArr
    //   }))
      .subscribe(
        (response) => {
          const data = JSON.stringify(response);
          this.userArr = JSON.parse(data)
        }
    )
  }
}
