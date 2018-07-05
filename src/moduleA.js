import _ from 'lodash';
import commonFn from './common';

console.warn("ModuleA - Loaded");

class ModuleA {
    get name() {
        return _.join(['ModuleA.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("ModuleA");
        console.log("---");
    }
}

export default ModuleA;