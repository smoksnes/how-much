import IQuestion from "./question";

export default interface IFlow{
    id: number,
    name: string;
    questions: IQuestion[]
    // constructor(name:string, questions: Question[]){
    //     this.name = name;
    //     this. questions = questions;
    // }

}