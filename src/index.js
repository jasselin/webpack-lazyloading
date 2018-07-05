import _ from 'lodash';

console.log('index - Loaded');

window.loaders = [];

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Webpack', 'lazy-loading', '<br>'], ' ');

    return element;
}

function module1Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModule1';
    element.value = 'Module 1';

    element.addEventListener('click', function () {
        console.log('Module 1 - click');

        import( /* webpackChunkName: 'module1' */ './module1')
        .then(module1 => {
            var instance = new module1.default();
            instance.test();
        });
    });

    return element;
}

function module2Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModule2';
    element.value = 'Module 2';

    element.addEventListener('click', function () {
        console.log('Module 2 - click');

        import( /* webpackChunkName: 'module2' */ './module2')
        .then(module2 => {
            var instance = new module2.default();
            instance.test();
        });
    });

    return element;
}

function module2FetchButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModule2Fetch';
    element.value = 'Module 2 (fetch)';

    element.addEventListener('click', function () {
        console.log('Module 2 (fetch) - click');

        fetch('module2.js')
        .then(response => {
            console.log(`module2.js fetched`)
            return response.text();
        })
        .then((text) => {
            var start = window.webpackJsonp.length;
            eval(text);
            console.log('start', start);
            for(var i = start; i < window.webpackJsonp.length; i++) {
                console.log('inc', i);
                console.log(window.webpackJsonp[i]);
            }
        });
    });

    return element;
}

var loadedModules = {};

function module3StandaloneButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModule3Standalone';
    element.value = 'Module 3 (standalone)';

    var cpt = 0;

    element.addEventListener('click', function () {
        console.log('Module 3 (standalone) - click');

        cpt++;
        if (cpt > 3)
            cpt = 1;

        var moduleName = `module3-${cpt}.js`;

        var runModule = (type) => {
            console.log('runModule', moduleName);
            var instance = new type();
            instance.test();
        };

        if (loadedModules[moduleName]) {
            var module = loadedModules[moduleName];
            runModule(module);
        }
        else {
            fetch(moduleName)
                .then(response => {
                    console.log(`${moduleName} fetched`)
                    return response.text();
                })
                .then((text) => {
                    var module = (eval(text)).default;
                    loadedModules[moduleName] = module;
                    runModule(module);
                });
            }
    });

    return element;
};

function loader1Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnLoader1';
    element.value = 'Init Loader1';

    element.addEventListener('click', function () {
        fetch("loader1.js")
            .then(response => {
                console.log("Loader1 fetched");
                return response.text();
            })
            .then((text) => {
                eval(text);
            })
    });

    return element;
};

function loader2Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnLoader2';
    element.value = 'Init Loader2';

    element.addEventListener('click', function () {
        fetch("loader2.js")
            .then(response => {
                console.log("Loader2 fetched");
                return response.text();
            })
            .then((text) => {
                eval(text);
            })
    });

    return element;
};

function loaderModuleButton(loaderName, moduleName) {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModule' + moduleName;
    element.value = moduleName;

    element.addEventListener('click', function () {
        console.log(moduleName + ' - click');

        if (!window.loaders[loaderName])
        {
            console.log(loaderName + " not available.");
            return;
        }

        window.loaders[loaderName].fetchModule(moduleName)
        .then(m => {
            var instance = new m.default();
            instance.test();
        });
    });

    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    var section1 = document.getElementById('section1');

    section1.appendChild(component());
    section1.appendChild(module1Button());
    section1.appendChild(module2Button());
    section1.appendChild(module2FetchButton());
    section1.appendChild(module3StandaloneButton());

    var loader1 = document.getElementById('loader1')
    loader1.appendChild(loader1Button())
    loader1.appendChild(loaderModuleButton("loader1", "moduleA"))
    loader1.appendChild(loaderModuleButton("loader1", "moduleB"))

    var loader2 = document.getElementById('loader2')
    loader2.appendChild(loader2Button())
    loader2.appendChild(loaderModuleButton("loader2", "moduleC"))
    loader2.appendChild(loaderModuleButton("loader2", "moduleD"))
});