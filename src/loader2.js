import { Loader } from "./loader";

console.warn("Loader2 - Loaded");

var modules = {
    "moduleC": () => import(/* webpackChunkName: "moduleC" */"./moduleC"),
    "moduleD": () => import(/* webpackChunkName: "moduleD" */"./moduleD")
};

window.loaders["loader2"] = new Loader(modules);