import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {SidebarCloseAnimation, SidebarOpenAnimation} from "./animations";

const animationParams = {
  menuWidth: "260px",
  animationStyle: "500ms ease"
};

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})
export class WebComponent implements OnInit {

  isOpen = false

  constructor() { }

  ngOnInit(): void {
  }

  showMenu() {
    let sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('close');
  }

  dropdownMenu(e: HTMLElement) {
    let arrowParent = e.parentElement?.parentElement;
    arrowParent?.classList.toggle('showMenu');
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark_mode')
  }
}
