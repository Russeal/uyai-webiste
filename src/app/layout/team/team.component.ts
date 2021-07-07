import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

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



  constructor(private router: Router) { }

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

}
