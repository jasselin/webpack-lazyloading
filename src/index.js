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

document.addEventListener('DOMContentLoaded', () => {
    var section1 = document.getElementById('section1');

    section1.appendChild(component());
    section1.appendChild(module1Button());
    section1.appendChild(module2Button());
});