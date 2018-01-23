
const co = require('co');

function oneSecPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('timeout at 1s')
      resolve(1000);
    }, 1000);
  });
}

function twoSecPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('timeout at 2s')
      resolve(2000);
    }, 2000);
  });
}


// oneSecPromise()
//   .then(() => twoSecPromise())
//   .catch(err => console.error(err));

co(function* () {
  let counter = 2;
  do {
    yield oneSecPromise()
      .then(res => console.log(res))
    yield twoSecPromise()
      .then(res => console.log(res))
  } while (counter--);
})
  .catch(err => console.error(err));
