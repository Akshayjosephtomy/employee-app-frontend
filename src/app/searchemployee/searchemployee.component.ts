import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""

  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        this.Data=res
      }
    )
  }
  Data:any=[]

  ngOnInit(): void {
  }

}


