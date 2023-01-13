import IQuestion from "./question";

export default interface IAnswer{
    title:string,
    value:string
    questions:IQuestion[]
}