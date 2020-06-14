import {Excel} from '@/Components/excel/Excel'
import {Toolbar} from '@/Components/toolbar/Toolbar';
import {Header} from '@/Components/header/Header';
import {Formula} from '@/Components/formula/Formula';
import {Table} from '@/Components/table/Table';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {initialState} from '@/redux/initialState';
import './scss/index.scss'
import {debounce, storage} from '@core/utils';

const store = createStore(rootReducer, initialState)

const stateListener = debounce(state => {
  storage('excel-state', state)
}, 300)

store.subscribe(stateListener)

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
})

excel.render()
