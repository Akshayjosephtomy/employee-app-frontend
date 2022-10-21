import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false

  name=""
  code=""
  address=""
  dob=""
  phone=""
  salary=""
  company=""

  readvalue=()=>{
    let data={
      "name":this.name,
      "code":this.code,
      "address":this.address,
      "dob":this.dob,
      "phone":this.phone,
      "salary":this.salary,
      "company":this.company
      
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added")
        this.name=""
        this.code=""
        this.address=""
        this.dob=""
        this.phone=""
        this.salary=""
        this.company=""
        this.status=true
      }
    )

  }

  ngOnInit(): void {
  }

}
