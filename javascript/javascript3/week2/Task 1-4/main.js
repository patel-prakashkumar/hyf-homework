// task 1 Movies exercise
fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
    .then((res) => res.json())
    .then((moviesData) => {
        const moviesList = moviesData;
        console.log(moviesList);
        const badMovies = moviesList.filter((list) => list.rating < 4);
        console.log(badMovies);
        const badMoviesSince2000 = badMovies.filter((list) => list.year > 2000);
        console.log(badMoviesSince2000);
    });

//task 2 Promise that resolves after set time by decalring variable as const
const delaySecond = new Promise((resolve) => {
    setTimeout(() => {
        console.log('logged out after 5 seconds')
        resolve('Your Promise is Resolved');
    }, 5000)
})
delaySecond.then((message) => {
    console.log('I am called asynchronously ' + message);
})
//Used promises with return function
function delay(second) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`logged out after ${second} seconds`)
        resolve('Your Promise is Resolved');
    }, 1000 * second));
}
delay(8).then((message) => console.log("I am called asynchronously " + message));
// Promise that resolves after set time using async / await
async function loggedOutAfter(resolveAfter) {
    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, resolveAfter * 1000);
    });
}
loggedOutAfter(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
});

// task3 Rewrite setTimeout to promises.
function setTimeoutPromise(second) {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(`logged out after ${second} ms`);
            resolve();
        }, second)
    );
}
setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});

// task3 Rewrite navigator.geolocation.getCurrentPosition to promises..

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation.getCurrentPosition) {
            resolve('There is location.');
        } else {
            reject(`can't find location`);
        }
    });
}
getCurrentLocation()
    .then((res) => {
        navigator.geolocation.getCurrentPosition(position => {
            let x = position.coords.latitude;
            let y = position.coords.longitude;
            console.log(`${res} Latititude : ${x}, Longitude : ${y}`);
        })
    })
    .catch((error) => {
        console.log('There is error  ' + error);
    });

// task 4 Fetching and waiting
// using promises and .then.
function astronautData() {
    setTimeout(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, 3000);
}
astronautData();

//Fetching and waiting using async/await
async function astronautDataAsync() {
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3000)
    );
    const aestronautDataApi = await fetch('http://api.open-notify.org/astros.json');
    const aestronaut = await aestronautDataApi.json();
    console.log(aestronaut);
}
astronautDataAsync();


