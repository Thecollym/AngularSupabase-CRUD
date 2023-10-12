import { Component,OnInit,AfterViewInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  data: any
  constructor(private http:SupabaseService){}

  ngOnInit(){
    this.getDataUsers();
   
  }

  ngOnAfterViewInit(){
    this.getDataUsers();
  }


  // methods
  getDataUsers(){
    this.http.get().subscribe(res => {
      console.log(res)
      this.data = res;
    })
  }
}
