import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import IFlow from 'src/app/interfaces/flow';
import FlowService from 'src/app/services/flow-service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {  

  public flows : Array<IFlow> = new Array<IFlow>;

  constructor(
    private readonly _flowService: FlowService,
  ) { 
    debugger;
    console.log(this.flows);
  }
  ngOnInit(): void {
    this._flowService.getFlows().then(x => this.flows = x);
  }

}
