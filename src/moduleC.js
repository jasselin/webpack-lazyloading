import _ from 'lodash';
import commonFn from './common';

console.warn("ModuleC - Loaded");

class ModuleC {
    get name() {
        return _.join(['ModuleC.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("ModuleC");
        console.log("---");
    }
}

export default ModuleC;