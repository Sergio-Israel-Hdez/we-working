import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

  private UsuarioLoginObject:FormGroup;
 
  constructor(private formBuilder:FormBuilder) {
    this.UsuarioLoginObject = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
    
  }
}
