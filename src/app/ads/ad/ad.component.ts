import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imgUrl!: string;
  @Input() price!: string;
  @Input() customId!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
