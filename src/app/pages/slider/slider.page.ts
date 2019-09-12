import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.css'],
})
export class SliderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valueChange(event: number) {
    console.log(event);
  }

}
