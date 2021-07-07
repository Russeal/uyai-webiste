import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public isUz: Boolean;
  public isRu: Boolean;
  public isEn: Boolean;

  @HostListener('window:scroll', []) onWindowScroll() {

    if (document.documentElement.scrollTop >= 60) {

      document.getElementsByClassName("jarallax")[0].classList.add("marg-top");

    } else {

      document.getElementsByClassName("jarallax")[0].classList.remove("marg-top");

    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
    
    if (this.router.url.startsWith('/it')) {
      this.isUz = false;
      this.isRu = true;
      this.isEn = false;
      document.getElementById("langUz").classList.remove("active");
      document.getElementById("langRu").classList.add("active");
      document.getElementById("langEn").classList.remove("active");
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
