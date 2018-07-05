import _ from 'lodash';
import commonFn from './common';

console.warn("ModuleB - Loaded");

class ModuleB {
    get name() {
        return _.join(['ModuleB.name', ' - ', 'get'], ' ');
    }

    test() {
        console.log(this.name);
        commonFn("ModuleB");
        console.log("---");
    }
}

export default ModuleB;