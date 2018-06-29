import _ from 'lodash';

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

        import('./module1')
            .then(module1 => {
                var obj = new module1.default();
                console.log(obj.name);
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

        import('./module2')
            .then(module2 => {
                var obj = new module2.default();
                console.log(obj.name);
            });
    });

    return element;
}

document.body.appendChild(component());
document.body.appendChild(module1Button());
document.body.appendChild(module2Button());