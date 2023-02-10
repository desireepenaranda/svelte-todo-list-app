export default class TodoApi {
    static async getAll(){
        console.log("within get all api function");
        console.log(localStorage.getItem("todo-list"));
        //let toDoList = JSON.parse(localStorage.getItem("todo-list") || "[]");
        //console.log(toDoList);
        return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }

    static async save(items){
        localStorage.setItem("todo-list", JSON.stringify(items));
    }
}