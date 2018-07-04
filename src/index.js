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

    element.addEventListener('click', function() {
        console.log('Module 1 - click');

        import(/* webpackChunkName: "module1" */'./module1')
            .then(module1 => {
                var obj = new module1.default();
                obj.test();
            });
    });

    return element;
}

function module2Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = "btnModule2";
    element.value = 'Module 2';

    element.addEventListener('click', function() {
        console.log('Module 2 - click');

        import(/* webpackChunkName: "module2" */'./module2')
            .then(module2 => {
                var obj = new module2.default();
                obj.test();
            });
    });

    return element;
}

function module3StandaloneButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = "btnModule3Standalone";
    element.value = 'Module 3 (standalone)';

    element.addEventListener('click', function() {
        console.log('Module 3 (standalone) - click');

        fetch('module3-standalone.js').then(response => response.text())
            .then((text) => {
                var obj = new (eval(text)).default;
                obj.test();
            });
    });

    return element;
}

document.body.appendChild(component());
document.body.appendChild(module1Button());
document.body.appendChild(module2Button());
document.body.appendChild(module3StandaloneButton());