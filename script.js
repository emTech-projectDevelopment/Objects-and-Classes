// CREATE AN ARRAY OF OBJECTS
let myObj = [
    {
    Fname: "Wendy",
    Lname: "Smith",
    age: 33,
    occupation: "Hairdresser"
},
    {
    Fname: "Amy",
    Lname: "Smith",
    age: 31,
    occupation: "Teacher"
},
    {
    Fname: "Lucas",
    Lname: "Hamer",
    age: 23,
    occupation: "Developer"
},
    {
    Fname: "Walter",
    Lname: "Liszt",
    age: 44,
    occupation: "Chef"
},
]

// BINDING A VARIABLE INTO THE DOCMUNET OBJECT MODEL (DOM)
let myDiv = document.querySelector('.my-div');

//console.log(myDiv)

// LOOP THROUGH OUR ARRAY OF OBJECTS AND CREATE DYNAMIC HTML
for (let i = 0; i < myObj.length; i++){
    let newHTML = `
    <div class="user">
        <h1 style="color: green; font-size: 28px;">Name : ${myObj[i].Fname} ${myObj[i].Lname}</h1>
        <h3>Age : ${myObj[i].age}</h3>
        <h2 id="occupation">Occupation :${myObj[i].occupation}</h2>
    </div>
    `

    // AT EVERY ITERATION WE INSERT NEW HTML TO OUT DOM BOUND VARIABLE
    myDiv.innerHTML += newHTML;
}

// LOOP OUR OBJECTS
for (const obj of myObj) {
    console.log(`Name: ${obj.Fname} ${obj.Lname}\nAge: ${obj.age}\nOccupation: ${obj.occupation}\n`)
}
