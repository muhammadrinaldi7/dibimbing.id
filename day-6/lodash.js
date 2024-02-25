import _ from 'lodash';

function square(n){
    return n*n;
}

const res = _.map([4,8],square);

console.log(res);