import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import IFlow from 'src/app/interfaces/flow';
import FlowService from 'src/app/services/flow-service';

@Component({
  selector: 'flow-component',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit, OnDestroy  {
  sub: any;  
  id: number = 0;
  flow: IFlow|null = null;

  constructor(
    private readonly _flowService: FlowService,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this._flowService.getFlow(this.id).then(flow => this.flow = flow);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
