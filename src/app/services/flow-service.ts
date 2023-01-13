import { Injectable } from "@angular/core";
import IFlow from "../interfaces/flow";
import * as jsonData from '../../assets/flows2.json'
import { lastValueFrom } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export default class FlowService
{
    flows: IFlow[] =  new Array<IFlow>;

constructor(private http: HttpClient){}

    public getFlows = async () : Promise<Array<IFlow>> => {
        debugger;
        // const json : string = JSON.stringify(jsonData);
        // console.log(json)
        const configCall = this.http.get<Array<IFlow>>('./assets/flows2.json');
        this.flows = await lastValueFrom(configCall)
        // const flows: Array<IFlow> = jsonData as Array<IFlow>;//;JSON.parse(json);
        return this.flows;
    }
}