import { Component, OnInit } from '@angular/core';
import { Products } from './products'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
  products = Products
  constructor() { }

  ngOnInit(): void {
    console.log('test初始化');
    
  }

  share(i : number): void{
    console.log('share'+i);
  }

  onNotify(item :number) : void{
    alert("price= "+item)
  }

}
