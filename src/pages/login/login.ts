import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  public loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.loginForm = this.createLoginForm();    
  }

  createLoginForm(){
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), 
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), 
        Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
        Validators.required])],
    })
  }

  login(){
    console.log(this.loginForm.value);
  }

}
