import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Refill } from '../refill';
import { RefillStatus } from '../refill-status';
import { RefillStatusService } from '../refill-status.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-refill',
  templateUrl: './refill.component.html',
  styleUrls: ['./refill.component.css']
})
export class RefillComponent implements OnInit {

  date!:Date
  token!:String
  //refill:Refill = new Refill(0,'',"","",0)
  refill:Refill={'policyID':2,'subID':localStorage.getItem('subID') as string,'memberID':'admin','location':'','quantity':0}
  
  tab:boolean=false
  errorMsg:string=''
  sid:string=''
  constructor(private rservice:RefillStatusService,private route:Router,private aroute: ActivatedRoute,private authService:AuthService,private snack:MatSnackBar) { 

   
   
      // if(!this.authService.isLoggedIn()){
      //   this.route.navigate([""]);
      // }

  }
 
  ngOnInit(): void {
    
   
    
   
  }
  msg!:string
  public cities:string[]=['Bangalore','Chennai','Hyderabad','Pune']
  
  saveOrder(){
   
   console.log(localStorage.getItem('subID')+'*********************')
   
    this.rservice.saveRefill(this.refill).subscribe(
      (      data:any) =>
      {
        this.tab=true

        
        console.log(this.refill.subID+'in .ts')
        
        this.msg="Refill request submitted"
        this.snack.open(this.msg,"Cancle",{
          duration: 3000,
          
          verticalPosition: 'top',
          panelClass: ["sub-style"]
        });
        
      }, (error: any)=>{
        this.msg="Drug Quantity Not Available"
        console.log('inside error')
        this.snack.open(this.msg,"Cancle",{
          duration: 3000,
          
          verticalPosition: 'top',
          panelClass: ["sub-style1"]
        });

        this.tab=false
        this.errorMsg = "No Refill requests found"
        
    }
    )
    //this.route.navigate(['/refillStatus'])
  }


  handleSubmit()
  {
    console.log(this.refill)
    
    this.saveOrder();
  }
}