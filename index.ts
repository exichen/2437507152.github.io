interface User{
    username：string;
    password:string;
    age:number
}

function login(user:User){...}

let someValue:unknown="啦啦啦啦啦啦啦";
let strLength:number=(<string>someValue).length;
