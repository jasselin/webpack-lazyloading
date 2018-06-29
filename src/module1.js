import _ from 'lodash';
import commonFn from './common';

console.log("Module1 - Loaded");

class Module1 {
    get name() {
        return _.join(['Module1.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("Module1");
        console.log("---");
    }
}

export default Module1;