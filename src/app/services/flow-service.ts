import { Injectable } from "@angular/core";
import IFlow from "../interfaces/flow";
import * as jsonData from '../../assets/flows.json'

@Injectable({
    providedIn: 'root'
  })
export default class FlowService
{
    public getFlows = () : Array<IFlow> => {
        debugger;
        const flows: Array<IFlow> = JSON.parse(JSON.stringify(jsonData))
        return flows;
    }
}