import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {emit} from 'cluster';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public  pData;
  public green = 'green';
  public data;
  @Output() public child = new EventEmitter();
  public status = true;
  constructor() { }

  ngOnInit() {
  }
  sent() {
      this.child.emit(this.data);
  }

}
