// async : doesnt execute immediately, but waits for the previous code to be executed
// setTimeout(() => {
//     console.log("time out!")
// }, 2000)

//sync code : executes immediately

//async code waits sync code to be executed !
console.log("Hello");
console.log("Hi");

//////////////// callback ///////////////////
const fetchData = callback => { // callback is a function that is passed to the function fetchData
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}
setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    })
}, 2000)

//////////////// promises ///////////////////

const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};
setTimeout(() => {
    console.log('Timer is done');
    fetchData2()
    .then(text => { // .then is a promise method that is executed when the promise is resolved
        console.log(text);
        return fetchData2();
    })
    .then(text => { // this then is based on result of the last promise (then)
        console.log(text);
    })
    // .catch(error => { // .catch is a promise method that is executed when the promise is rejected
    //     console.log(error);
    // })
}, 2000)