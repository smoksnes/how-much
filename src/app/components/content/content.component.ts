import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import FlowService from 'src/app/services/flow-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {  


  constructor(
    private readonly _flowService: FlowService,
  ) { 
    debugger;
    const foo = _flowService.getFlows();
  }

}
