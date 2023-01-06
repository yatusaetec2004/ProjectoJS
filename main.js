class Post {
    constructor(user, postMsg) {
        this.user = user;
        this.postMsg = postMsg;
    }
}

class User {
    constructor(username, photo) {
        this.username = username;
        this.photo = photo;
    }
}

function createSpacer() {
    const spacer = document.createElement("DIV");
    spacer.setAttribute("class", "vspacer")
    return spacer;
}

const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const user1 = new User("Juan", "imgs/coffee.png");
const user2 = new User("Jose", "imgs/monster.png");
const user3 = new User("Rodrigo", "imgs/guitarra.png");
const datos = [
    new Post(user1, "Hola que tal amigos"),
    new Post(user2, "Hola Juan como estás"),
    new Post(user3, "Hoy no me siento bien :( BOEFJBVBDVOJDABVJLDBVJ KDAVBJKDBVK JDBVJKDBVJDSVBJD SVBJDSVBJSDVBJ LDSVBLSDVVDBDV BJDVBJKSDVBJKVBD"),
    new Post(user1, "Pues sientate bien jejox"),
    new Post(user3, "No puedo man"),
    new Post(user2, "Que pesado el tío ese joder"),
    new Post(user3, "Tu eres pesado man"),
];

datos.forEach(post => {
    const postContainer = container.cloneNode(true);
    postContainer.removeAttribute("hidden");
    postContainer.querySelector("#profilePic").setAttribute("src", post.user.photo);
    postContainer.querySelector("#username").textContent = post.user.username;
    postContainer.querySelector("#message").textContent = post.postMsg;
    fragment.appendChild(postContainer);

    
    fragment.appendChild(createSpacer());
});

body.appendChild(fragment);
// container.outerHTML = "";