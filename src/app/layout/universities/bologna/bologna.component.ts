import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bologna',
  templateUrl: './bologna.component.html',
  styleUrls: ['./bologna.component.scss']
})
export class BolognaComponent implements OnInit {

  @HostListener('window:scroll', []) onWindowScroll() {

    if (document.documentElement.scrollTop >= 60) {

      document.getElementsByClassName("myController")[0].classList.add("marg-top2");

    } else {

      document.getElementsByClassName("myController")[0].classList.remove("marg-top2");

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
