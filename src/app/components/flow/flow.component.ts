import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import FlowService from 'src/app/services/flow-service';

@Component({
  selector: 'flow-component',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit, OnDestroy  {
  sub: any;  
  id: number = 0;

  constructor(
    private readonly _flowService: FlowService,
    private route: ActivatedRoute
  ) { 
    
    const foo = _flowService.getFlows();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
