import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
interface Product {
  id : number,
  name :string,
  description ?: string,
  price : number
}
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {
  @Input() product! : Product
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
