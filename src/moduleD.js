import _ from 'lodash';
import commonFn from './common';

console.warn("ModuleD - Loaded");

class ModuleD {
    get name() {
        return _.join(['ModuleD.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("ModuleD");
        console.log("---");
    }
}

export default ModuleD;