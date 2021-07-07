import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  public isUz: Boolean;
  public isRu: Boolean;
  public isEn: Boolean;

  @HostListener('window:scroll', []) onWindowScroll() {

    if (document.documentElement.scrollTop >= 60) {

      document.getElementsByClassName("white")[0].classList.add("fixed-top");

    } else {

      document.getElementsByClassName("white")[0].classList.remove("fixed-top");

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
      document.getElementById("langUz").classList.remove("active");
      document.getElementById("langRu").classList.remove("active");
      document.getElementById("langEn").classList.add("active");
    } else {
      this.isUz = true;
      this.isRu = false;
      this.isEn = false;
      document.getElementById("langUz").classList.add("active");
      document.getElementById("langRu").classList.remove("active");
      document.getElementById("langEn").classList.remove("active");
    }

  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  onActivate(event) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera.
  }

  public changeToUz() {
    this.isUz = true;
    this.isRu = false;
    this.isEn = false;

    document.getElementById("langUz").classList.add("active");
    document.getElementById("langRu").classList.remove("active");
    document.getElementById("langEn").classList.remove("active");
    

    this.router.navigate([""])
  }

  public changeToRu() {
    this.isRu = true;
    this.isUz = false;
    this.isEn = false;
    
    document.getElementById("langUz").classList.remove("active");
    document.getElementById("langRu").classList.add("active");
    document.getElementById("langEn").classList.remove("active");

    this.router.navigate(["/it"])
  }

  public changeToEn() {
    this.isRu = false;
    this.isUz = false;
    this.isEn = true;
    
    document.getElementById("langUz").classList.remove("active");
    document.getElementById("langRu").classList.remove("active");
    document.getElementById("langEn").classList.add("active");

    this.router.navigate(["/en"])
  }

}
