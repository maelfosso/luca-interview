import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../_models/publication';

@Component({
  selector: 'app-publication-item',
  templateUrl: './publication-item.component.html',
  styleUrls: ['./publication-item.component.css']
})
export class PublicationItemComponent implements OnInit {

  @Input()
  publication: Publication

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
  }

}
