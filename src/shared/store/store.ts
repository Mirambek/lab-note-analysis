import { Container } from 'aurelia-framework';
import { Store } from 'aurelia-store';
import { State } from '../types/state';

const store: Store<State> = Container.instance.get<State>(Store);

export default store;