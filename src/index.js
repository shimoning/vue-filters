import * as stringFilters from './filters/string'
import * as numberFilters from './filters/number'
import * as dateFilters from './filters/date'

const VueFilters = {
  install (Vue, options) {
    for (const key in stringFilters) {
      Vue.filter(key, stringFilters[key].bind(options))
    }

    for (const key in numberFilters) {
      Vue.filter(key, numberFilters[key].bind(options))
    }

    for (const key in dateFilters) {
      Vue.filter(key, dateFilters[key].bind(options))
    }
  }
}

export default VueFilters
