import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";

@connectTo({
    target: 'noteEntry',
    selector:  (store) => store.state.pipe(pluck('noteEntry'))
  })
export class ResultView{
    translation: { word: string; frequency: string; similar: string; result: string; };
    constructor(){
        this.translation = {
            word:'Word',
            frequency:'Frequency',
            similar:'List of similar',
            result:'Result'
        }
    }
}