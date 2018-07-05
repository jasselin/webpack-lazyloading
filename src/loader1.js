import { Loader } from "./loader";

console.warn("Loader1 - Loaded");

var modules = {
    "moduleA": () => import(/* webpackChunkName: "moduleA" */"./moduleA"),
    "moduleB": () => import(/* webpackChunkName: "moduleB" */"./moduleB")
};

window.loaders["loader1"] = new Loader(modules);