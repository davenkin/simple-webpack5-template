import './styles/global.scss';
import './index.scss';
import _ from 'lodash';

function createElement() {
    const element = document.createElement('div');
    element.classList.add('aDiv');
    element.innerHTML = _.join(['Hello', 'World','!'],' ');
    return Promise.resolve(element);
}

createElement().then(function (element) {
    document.body.appendChild(element);
});
