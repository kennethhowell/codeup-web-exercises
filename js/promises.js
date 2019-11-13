"use strict";

 //Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

 function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

function lastCommit(username) {
    let bucket = "";
    fetch("https://api.github.com/users/" + username + "/events", {headers: {'Authorization': "token " + githubToken}})
        .then((response) => {
                response.json().then((events) => {
                bucket = (events[0].created_at);
                bucket = bucket.slice(0,10);
                bucket = bucket.split("-");
                let year = bucket.shift();
                    bucket.push(year);
                    bucket = bucket.join("-");

                    return bucket;
            }).then(bucket => console.log(`${username}'s last commit was ${bucket}`))
        }).catch(() => console.log("failure"));
}


// console.log(fetch("https://api.github.com/users/kennethhowell/events", {headers: {'Authorization': "token " + githubToken}})
//     .then(response => {
//         console.log(response.json());;
//         console.log(response);
//     }));


lastCommit("kennethhowell");
lastCommit("christopheraguirre210");

