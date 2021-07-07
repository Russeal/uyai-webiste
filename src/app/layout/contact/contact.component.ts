import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  public isUz: Boolean;
  public isIt: Boolean;
  public isEn: Boolean;

  @HostListener('window:scroll', []) onWindowScroll() {

    if (document.documentElement.scrollTop >= 60) {

      document.getElementsByClassName("myController")[0].classList.add("marg-top2");

    } else {

      document.getElementsByClassName("myController")[0].classList.remove("marg-top2");

    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService, private router: Router) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
    });

  }

  ngOnInit() {

    if (this.router.url.startsWith('/it')) {
      this.isUz = false;
      this.isIt = true;
      this.isEn = false;
    } else if (this.router.url.startsWith('/en')) {
      this.isUz = false;
      this.isIt = false;
      this.isEn = true;
    } else {
      this.isUz = true;
      this.isIt = false;
      this.isEn = false;
    }
    
  }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

}
