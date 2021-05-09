import { NoteEntry } from "./note-entry";

export interface State {
  noteEntry: NoteEntry;
}

export const initialState: State = {
  noteEntry: {
    text: "Word Words Wor word",
    searchText: "",
    result: new Array<string>(0),
  },
};
