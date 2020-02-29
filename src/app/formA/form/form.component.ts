import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() prefix: string;
    public fname: string;

  constructor() { }

  ngOnInit() {
    this.getId();
  }

  private getId() {
    this.fname = this.prefix + 'firstName';
  }
}
