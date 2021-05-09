import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { autoinject } from "aurelia-framework";
import { WordAnalyzer } from "services/word-analyzer";
import { WordInfo } from "shared/types/word-info";
import { ActionName } from "shared/types/action-name";
import store from "shared/store/store";

const noteEntry: string = "noteEntry";

@connectTo({
  target: noteEntry,
  selector: (store) => store.state.pipe(pluck(noteEntry)),
})
@autoinject
export class Editor {
  translation: { noteEntry: string; search: string; analyze: string };
  constructor(private wordAnalyzer: WordAnalyzer) {
    this.translation = {
      noteEntry: "Note entry",
      search: "Search:",
      analyze: "Analyze",
    };
  }
  public analyzeWord(): void {
    const searchText = this[noteEntry].searchText;
    if (searchText) {
      const wordInfo: WordInfo = this.wordAnalyzer.getAnalysis(
        searchText,
        this[noteEntry].text
      );
      store.dispatch(ActionName.NoteEntryResultUpdate, [
        wordInfo,
        ...this[noteEntry].result,
      ]);
    } else alert(`Please enter search Text`);
  }
}
