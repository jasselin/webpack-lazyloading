import _ from 'lodash';
import scriptjs from 'scriptjs';

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

function module3Button() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = "btnModule3";
    element.value = 'Module 3';

    element.addEventListener('click', function() {
        console.log('Module 3 - click');

        // import(/* webpackChunkName: "module3" */'./module3')
        //     .then(module2 => {
        //         var obj = new module2.default();
        //         obj.test();
        //     });
        scriptjs("module3.js", function() {
            console.log("scriptjs - module3", arguments);
        });
    });

    return element;
}

document.body.appendChild(component());
document.body.appendChild(module1Button());
document.body.appendChild(module2Button());
document.body.appendChild(module3Button());