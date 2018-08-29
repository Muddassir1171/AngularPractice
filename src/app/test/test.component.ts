import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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
  public danger = 'red';
  public array = ['red', 'green', 'blue'];
  public styleArray = {
    height: '20px',
    width: '40px',
  }
  public color = '';
  constructor() { }

  ngOnInit() {
  }
  sent() {
      this.child.emit(this.data);
  }

}
