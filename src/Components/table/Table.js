import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/Components/table/table.template';
import {resizeHandler} from '@/Components/table/table.resize';
import {shouldResize} from '@/Components/table/table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
