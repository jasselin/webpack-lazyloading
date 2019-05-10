import _ from 'lodash';

console.log('index - Loaded');

var modules = window.WebpackTest;

const loadModule = name => {
    return new Promise((resolve, reject) => {

        let onLoad = () => {
            var m = new modules[name].default();
            resolve(m)
        }

        if (modules[name])
        {
            onLoad();
            return;
        }

        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = onLoad;
        script.onerror = reject;
        script.async = true;
        script.src = 'out/' + name + '.js';
    });
};

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

        loadModule('module1')
        .then((m) => {
            m.test();
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

        loadModule('module2')
        .then((m) => {
            m.test();
        });
    });

    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    var section1 = document.getElementById('section1');

    section1.appendChild(component());
    section1.appendChild(module1Button());
    section1.appendChild(module2Button());
});