import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  
  show:boolean=false;
  //DropDown-List Array for Designation
  designation:any=['CEO','Director','Manager','Associate','Programmer Analyst'];
  
  //Multiselect-DropDown for Hobbies
  hobbies = [
    { id:1, name:"Reading"},
    { id:2, name:"Photography"},
    { id:3, name:"painting"},
    { id:4, name:"Hiking"},
    { id:5, name:"Dance"},
    { id:6, name:"Writing"},];

    selected = [{ id:5,name:"Dance"}];

  message="";
  submitted=false;
  //password_pattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$";
  password_pattern="(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}";
   Username_pattern= "^[a-zA-Z ]{3,20}$";
  
  UserDetailForm = new FormGroup({
    // UserName: new FormControl('',Validators.required),
    // Password: new FormControl()
  })
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
   
    this.UserDetailForm= this.fb.group({
      FirstName: ['',[Validators.required,Validators.pattern(this.Username_pattern)]],
      LastName:['',[Validators.required,Validators.pattern(this.Username_pattern)]],
       Password: ['',[Validators.required,Validators.pattern(this.password_pattern)]],
     
     // Password:['',Validators.compose([Validators.required])],
      Designation:['',[Validators.required]],
      Hobbies:['',[Validators.required]],
      Gender:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      DateOfBirth:['',[Validators.required]],
      Check:['']
    })

  
  }
  
  get fetchFormData(){
    return this.UserDetailForm.controls;
  }
  formSubmit(data)
  {
    this.submitted=true;
    if(this.UserDetailForm.invalid)
    {
      return;
    }  
    console.log(data); 
  }
  reset()
  {
    //this.UserDetailForm.reset();
    window.location.reload();

  }

}
