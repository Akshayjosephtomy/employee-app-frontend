import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallemployee',
  templateUrl: './viewallemployee.component.html',
  styleUrls: ['./viewallemployee.component.css']
})
export class ViewallemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.employeeData=data
      }
    )
  }

  deleteEmployee=(id:any)=>{
    let data={
      "id":id
  }
  this.myapi.deleteEmployee(data).subscribe(
    (resp)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
  }

  employeeData:any=[]

  ngOnInit(): void {
  }

}
