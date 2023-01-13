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

    public getFlow = async (index: number) : Promise<IFlow> => {
        if(this.flows.length == 0)
            await this.getFlows();
        
        return this.flows.filter(x => x.id == index)[0];
    }

    public getFlows = async () : Promise<Array<IFlow>> => {
        if(this.flows.length > 0)
            return this.flows;
        const configCall = this.http.get<Array<IFlow>>('./assets/flows2.json');
        this.flows = await lastValueFrom(configCall)
        return this.flows;
    }
}