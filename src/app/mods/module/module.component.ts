import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent implements OnInit {
  toggle = false;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    console.log('leaving the page');
    this.el.nativeElement.remove();
  }

  showModal() {
    this.toggle = !this.toggle;
  }
}
