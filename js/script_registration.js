let name = document.querySelector('#exampleFormControlTextarea1');
let login = document.querySelector('#exampleInputEmail1');
let password = document.querySelector('#exampleInputPassword1');
let sumbit = document.querySelector('#submit');

let users = {};

function User(name, login, password){
    this.name = name;
    this.login = login;
    this.password = password;
}

function createID(users){
    return Object.keys(users).length;
}

sumbit.addEventListener('click', () => {
    const nameUser = name.value;
    const loginUser = login.value;
    const passUser = password.value;

    const user = new User(nameUser, loginUser, passUser);

    const userId = 'User'+ createID(users);
    users[userId] = user;

    console.log(users);

    alert('Регистрация прошла успешно\n Пользователь ' + nameUser);

    if(alert == true){
        window.open("index_orders.html");
    }
})