import { Component, Input } from '@angular/core';
import IFlow from 'src/app/interfaces/flow';

@Component({
  selector: 'flow-item',
  templateUrl: './flow-item.component.html',
  styleUrls: ['./flow-item.component.scss']
})
export class FlowItemComponent {
  @Input() CurrentFlow! : IFlow;
}
