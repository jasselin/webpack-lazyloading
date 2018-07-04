import _ from 'lodash';
import commonFn from './common';

console.warn("Module2 - Loaded");

class Module2 {
    get name() {
        return _.join(['Module2.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("Module2");
        console.log("---");
    }
}

export default Module2;