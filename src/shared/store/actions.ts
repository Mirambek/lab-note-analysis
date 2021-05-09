import store from './store';
import { State } from '../types/state';
import { ActionName } from 'shared/types/action-name';


function noteEntryResultUpdate(state: State, result: Array<string>) {
    const newState = Object.assign({}, state);
    newState.noteEntry =  {...newState.noteEntry, result};
    return newState;
}

export const registerActions = ():void =>
     store.registerAction(ActionName.NoteEntryResultUpdate, noteEntryResultUpdate);
