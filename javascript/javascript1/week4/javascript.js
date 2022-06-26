let userName = "";
const todoList = [];
function getReply(command) {
    
    if (command === " " || typeof (command) !== 'string') {
        return "Invalid Input";
    }
    if (command.includes("Hello my name is")) {
        let enterName = command.split(" ").pop();
        if (!userName.includes(enterName)) {
            userName = enterName;
            return `Nice to meet you  ${userName}`;
        }
        else if (userName.includes(enterName)) {
            return `Nice to meet you again ${enterName}`
        }
        else {
            return "invalid command"
        }
    }
    if (command.includes("What is my")) {
        return `Your name is ${userName}`
    }
    if (command.includes("Add") && command.includes("to my todo")) {
        let myString = command.replace("to my todo", "");
        let todo = myString.replace("Add", "").trim();
        todoList.push(todo);
        return `${todo} added to your todo`
    }
    if (command.includes("Remove")) {
        let myString = command.replace("from my todo", "");
        let removeTodo = myString.replace("Remove", "").trim();
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i] === removeTodo) {
                todoList.splice(i, 1);
                return `Removed ${removeTodo} from your todo`;
            }
        }
    }
    if (command === "What is on my todo?") {
        return `you have ${todoList.length} - ${todoList}`
    }
    if (command.includes("What day is it")) {
        let date = new Date();
        const month = date.toLocaleString('default', { month: 'long' })
        let fullDate = `${date.getDate()}. of ${month} ${date.getFullYear()}`
        return fullDate;
    }
    if (command.includes("Set a timer for")) {
        let enterMinute = command.match(/\d+/g);
        setTimeout(function () {
            console.log("Time Done!");
        }, enterMinute * 60000);
        return `Timer set for ${enterMinute} minutes`;
    }
    if (command.includes("what is")) {

        let matches = command.match(/\d+/g);
        let oprator = command.split(" ");
        let result;
        if (oprator.includes('*')) {
            result = parseInt(matches[0]) * parseInt(matches[1]);
            return result;
        }
        else if (oprator.includes('+')) {
            result = parseInt(matches[0]) + parseInt(matches[1]);
            return result;
        }
        else if (oprator.includes('-')) {
            result = parseInt(matches[0]) - parseInt(matches[1]);
            return result;
        }
        else if (oprator.includes('/')) {
            result = parseInt(matches[0]) / parseInt(matches[1]);
            return result;
        }
        else {
            return "Invalide Operator"
        }
    }
    return `Please Enter Valid Input`
}
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Prakash"));
console.log(getReply(122));
console.log(getReply(" "));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add check javaScript tutorial to my todo"));
console.log(getReply("Add car pickup from garage to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("Remove car pickup from garage from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 50 + 70"))
console.log(getReply("what is 4 * 3"))
console.log(getReply("what is 60 - 3"))
console.log(getReply("what is 30 / 3"))
console.log(getReply("Set a timer for 0.5 minutes"));
console.log(getReply("Set a timer for 1 minutes"));

