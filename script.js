
const getPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log("Posts:", data);
};

const getComments = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await res.json();
    console.log("Comments:", data);
};

const getPhotos = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await res.json();
    console.log("Photos:", data);
};

const getTodos = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    console.log("Todos:", data);
};

getPosts();
getComments();
getPhotos();
getTodos();





const postPosts = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",

        body: JSON.stringify({
            userId: 1,
            title: "Rest API",
            body: "Men API orqali post yuboryapman",
        }),

        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });

    let data = await res.json();
    console.log(data);
};

postPosts();
