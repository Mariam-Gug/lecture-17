let mainWrapperPost = document.getElementById('post-block');



// sending request to server
function ajax() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.addEventListener('load', function() {
        let data = JSON.parse(request.responseText)

        data.forEach(element => {
            createPost(element);
        });
    });

    request.send();
}

ajax()


// creating posts
function createPost(item) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');

    let h2tag = document.createElement('h2');
    h2tag.innerText = item.id;

    let h3tag = document.createElement('h3');
    h3tag.innerText = item.title;

    divWrapper.appendChild(h2tag);
    divWrapper.appendChild(h3tag);

    mainWrapperPost.appendChild(divWrapper);

    console.log(mainWrapperPost);
}