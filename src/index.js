import _ from 'lodash';

console.log("index - Loaded");

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function module1Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = "btnModule1";
    element.value = 'Module 1';

    element.addEventListener('click', function () {
        console.log('Module 1 - click');

        import( /* webpackChunkName: "module1" */ './module1')
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
    element.name = "btnModule2";
    element.value = 'Module 2';

    element.addEventListener('click', function () {
        console.log('Module 2 - click');

        import( /* webpackChunkName: "module2" */ './module2')
        .then(module2 => {
            var instance = new module2.default();
            instance.test();
        });
    });

    return element;
}

var loadedModules = {};

function module3StandaloneButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = "btnModule3Standalone";
    element.value = 'Module 3 (standalone)';

    var cpt = 0;

    element.addEventListener('click', function () {
        console.log('Module 3 (standalone) - click');

        cpt++;
        if (cpt >= 10)
            cpt = 1;

        var moduleName = `module3-${cpt}.js`;

        var runModule = (type) => {
            console.log("runModule", moduleName);
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
}

document.body.appendChild(component());
document.body.appendChild(module1Button());
document.body.appendChild(module2Button());
document.body.appendChild(module3StandaloneButton());