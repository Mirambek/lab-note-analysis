import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";

@connectTo({
    target: 'noteEntry',
    selector:  (store) => store.state.pipe(pluck('noteEntry'))
  })
export class ResultView{
    translation: { word: string, frequency: string, similars: string };
    constructor(){
        this.translation = {
            word:'Word',
            frequency:'Frequency',
            similars:'Similars'
        }
    }
}