import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public isUz: Boolean;
  public isRu: Boolean;
  public isEn: Boolean;

  @HostListener('window:scroll', []) onWindowScroll() {

    if (document.documentElement.scrollTop >= 60) {

      document.getElementsByClassName("myController")[0].classList.add("marg-top2");

    } else {

      document.getElementsByClassName("myController")[0].classList.remove("marg-top2");

    }
  }

  constructor(private router: Router) { }

  ngOnInit() {

    if (this.router.url.startsWith('/it')) {
      this.isUz = false;
      this.isRu = true;
      this.isEn = false;
    } else if (this.router.url.startsWith('/en')) {
      this.isUz = false;
      this.isRu = false;
      this.isEn = true;
    } else {
      this.isUz = true;
      this.isRu = false;
      this.isEn = false;
    }

  }

}
