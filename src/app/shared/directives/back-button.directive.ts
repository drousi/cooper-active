import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[BackButton]',
})
export class BackButtonDirective implements OnInit{
  curentElement : ElementRef;
  constructor(private location: Location, element:ElementRef) {
    this.curentElement = element;
  }

  @HostListener('click')
  onClick() {
    console.log('back');
    this.location.back();
  }

  ngOnInit(){
    this.curentElement.nativeElement.innerText="<";
  }
}
