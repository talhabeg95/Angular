import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Country } from '../country';
import { CountriesService } from '../countries.service';
import { CustomValidatorsService } from '../custom-validators.service';
import { SignUpViewModel } from '../sign-up-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit 
{
  signUpForm: FormGroup;
  sexs = ["male","female"];
  countries: Country[] = [];
  registerError: string = null; 

  constructor(private countriesService: CountriesService, private formBuilder: FormBuilder, 
    private customValidatorsService: CustomValidatorsService, private loginService: LoginService,
    private router: Router)
    {}

  ngOnInit() 
  {
    this.countriesService.getCountries().subscribe((response) =>
    {
      this.countries = response;
    });

    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, [Validators.required,
          Validators.minLength(2)]],
        lastName: [null, [Validators.required,
          Validators.minLength(2)]],
      }),
      email: [null, [Validators.required,
        Validators.email]],
      phoneNumber: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      sex: [null, [Validators.required]],
      countryID: [null, [Validators.required]],
      receiveNewsLetters: [null],
      skills: this.formBuilder.array([])
    },{
      validators:[
        this.customValidatorsService.compareValidator
        ("confirmPassword","password")
      ]
    }
    );

    this.signUpForm.valueChanges.subscribe((value) => {
      //console.log(value);
    });

  }

  onSubmitClick()
  {
    //console.log(this.signUpForm.value);
    //this.signUpForm["submitted"]=true;
    //console.log(this.signUpForm);

    if(this.signUpForm.valid)
    {
      var signUpViewModel = this.signUpForm.value as SignUpViewModel;
      this.loginService.Register(signUpViewModel).subscribe(
        (response) => {
          this.router.navigate(["tasks"]);
        },
        (error) => {
          console.log(error);
          this.registerError = "Unable to submit";
        }
      );
    }
  }

  onAddSkill()
  {
    var formGroup = new FormGroup({
      skillName: new FormControl(null),
      level: new FormControl(null)
    });

    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }

  onRemoveClick(index: number)
  {
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }

}
