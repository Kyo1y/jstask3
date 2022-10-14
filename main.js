function request() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((posts) => {
        let content = document.getElementById("content");
        let ul = document.createElement("ul")
        content.appendChild(ul)
        for(let post in posts) {
            ul.innerHTML += `
            <div class="list-container"
                <span class="id"> ID: ${posts[post].id} </span>
                <h2 class="title"> ${posts[post].title} </h2>
                <p class="paragraph"> ${posts[post].body} </p>
            </div>
            <hr></hr>
            `
        }
    });
};