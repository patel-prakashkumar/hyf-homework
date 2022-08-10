//classmates repositories at the same time using Promise.all.
const myUl = document.getElementById('ul-container');
const urlsUsers = ['https://api.github.com/search/repositories?q=user:patel-prakashkumar', 'https://api.github.com/search/repositories?q=user:Yuliia-Balandiuk', 'https://api.github.com/search/repositories?q=user:27ManishaPatel']

Promise.all(urlsUsers.map(url => fetch(url).then(res => res.json())
)).then(data => {
    console.log(data)
    const userName = data.map(list => list.items[0].full_name);
    const userUrl = data.map(list => list.items[0].owner.repos_url);
    const userOwnerRepo = data.map(list => list.items[2].owner.login);

    for (let i = 0; i < userName.length; i++) {
        let userLI = document.createElement("li");
        userLI.classList.add("mystyleLI");
        userLI.innerHTML = "Full Name: " + userName[i];
        myUl.appendChild(userLI);

        let userUl = document.createElement('ul');
        userLI.appendChild(userUl);

        let userUrlLi = document.createElement('li');
        userUrlLi.classList.add("mystyle");
        userUrlLi.innerHTML = "User Url Repo: " + userUrl[i];
        userUl.appendChild(userUrlLi);

        let userOwnerRepoLi = document.createElement('li');
        userOwnerRepoLi.classList.add("mystyle");
        userOwnerRepoLi.innerHTML = "User Owner Repo: " + userOwnerRepo[i];
        userUl.appendChild(userOwnerRepoLi);
    }
}).catch((error) => {
    myUl.innerHTML = error;
});
