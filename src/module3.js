import _ from 'lodash';
import commonFn from './common';

console.log("Module3 - Loaded");

class Module3 {
    get name() {
        return _.join(['Module3.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("Module3");
        console.log("---");
    }
}

export default Module3;