export class Loader {
    constructor(modules) {
        this._modules = modules;
    }

    fetchModule(name) {
        return this._modules[name]();
    }
}