import LinkedList from "./LinkedList.js"

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());

list.insertAt(2, 10, 11);

console.log(list.toString());

list.removeAt(list.size()-1);

console.log(list.toString());