var readlinesync = require("readline-sync");
var shortid = require("shortid");
var fs = require("fs");

var showMenu = function () {
    console.log("               Student Managerment                  ");
    console.log("====================================================");
    console.log(" 1. Show all student ");
    console.log(" 2.Create student and return Menu");
    console.log(" 3.Delete student");
    console.log(" 4.Edit student");
    console.log(" 5.Find student by name");
    console.log(" 6.Sort student by name ascending");
    console.log(" 7.Sort student by age ascending");
    console.log(" 8.Delete all student");
    console.log(" 9. Sum student age");
    console.log(" 10.Exit");
  };

showMenu()
var choice = readlinesync.question("Your choice? ")
let studentFile = fs.readFileSync("./data.txt","utf8")
let student = JSON.parse(studentFile)

var sexGlobal = ["male", "female"]
const saveFile = () => {
    fs.writeFileSync("./data.txt",JSON.stringify(student.leghth > 0 ? student : []))
}

const createStudent = () => {
    let name = readlinesync.question("name? ")
    let age = readlinesync.question("age? ")
    let sex = readlinesync.keyInSelect(sexGlobal)
    student.push({
        id: shortid.generate(),
        name : name,
        age: parseInt(age),
        sex: sexGlobal[sex]
    })
    saveFile()
}

const deleteStudent = () => {
    let nameDel = readlinesync.question("What name do you want delete? ")
    let indexDel = student.findIndex((item) => {
        return item.name.toLowerCase() === nameDel.toLowerCase()
    })
    if(indexDel >= 0){
        student.splice(indexDel, 1);
        saveFile()
    }
}
const editStudent =() =>{
    let nameEdit = readlinesync.question("What name do you want edit? ")
    let indexEdit = student.findIndex((item) => {
        return item.name.toLowerCase() === nameEdit.toLowerCase()
    })
    if(indexEdit >= 0){
        let name = student[indexEdit].name
        let id = student[indexEdit].id
        let newAge = parseInt(readlinesync.question("age? "))
        let newSex = readlinesync.keyInSelect(sexGlobal)
        let newStudent = {
            id: id,
            name: name,
            age: newAge,
            sex: sexGlobal[newSex]
        }
        student.splice(indexEdit, 1, newStudent);
        saveFile()
    }
}
const filterStudent = () => {
    let nameFilter = readlinesync.question("What name do you want find?").toLowerCase()
    let listFilter = student.filter((item) => {
        return item.name.toLowerCase() === nameFilter
    })
    console.log(listFilter)

}

const sortByName =() => {
    student.sort((a,b) => (a.name > b.name) ? 1 : -1)
    console.log(student);
    //   sort có dấu ( test cho tiếng việt )
  //   student.sort((a, b) => {
  //     return a.name.localeCompare(b.name);
  //   });
}
const sortByAge =() => {
    student.sort((a,b) => a.age - b.age)
    console.log(student);
}
const deleAllStudent = () => {
    student = []
    saveFile()
}
const sumAgeStudent =() => {
    let sum = student.reduce((a , b) => {
        return a+=b.age
    }, 0)
    console.log("Sum student", sum);
}
while(true){
    switch (parseInt(choice)) {
    case 0:
        showMenu()
        choice = readlinesync.question("Your choice? ");
        break;
    case 1:
        console.log(student);
        choice = 0;
        break;
    case 2:
        createStudent();
        choice = 0;
        break;
    case 3:
        deleteStudent();
        choice = 0;
        break;
    case 4:
        editStudent();
        choice = 0;
        break;
    case 5:
        filterStudent();
        choice = 0;
        break;
    case 6:
        sortByName();
        choice = 0;
        break;
    case 7:
        sortByAge();
        choice = 0;
        break;
    case 8:
        deleAllStudent();
        choice = 0;
        break;
    case 9:
        sumAgeStudent();
        choice = 0;
        break;
    case 10:
        process.exit();
    default:
        console.log("Bạn phải chọn 1 số trong menu")
        choice = 0
        break;
    }
}