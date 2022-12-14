'use strict';

document.querySelector("body > section > form").addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("THIS:", this);

    const body = {
        age: event.target.age.value,
        name: event.target.name.value,
        habitat: event.target.habitat.value,
        gender: event.target.gender.value,

    };

    console.log("BODY:", body);

    const output = document.getElementById('output');

    axios.post("http://localhost:8080/duck/create", body)
    .then(response => {console.log(response);

        const duck = response.data;
        const duckAge = document.createElement('p');
        //const duckName = document.createElement('p');
        //const duckHabitat = document.createElement('p');
        //const duckGender = document.createElement('p');

        duckAge.innerText = `Age: ${age}`;
       // duckName.innerText = `Name: ${name}`;
        //duckHabitat.innerText = `Habitat: ${habitat}`;
        //duckGender.innerText = `Gender: ${gender}`;

        output.appendChild(duckAge).value;
       // output.appendChild(duckName).value;
       // output.appendChild(duckHabitat).value;
       // output.appendChild(duckGender).value;

        //newP.innerHTML += `Name: ${duck.name}<br>`;
        //newP.innerHTML += `Habitat: ${duck.habitat}<br>`;
        //newP.innerHTML += `Gender: ${duck.gender}<br>`;
        //document.querySelector('input[name="age"]').value = "New value";


            event.target.reset();
            event.target.name.focus();
        })
        .catch(err => console.error(err));

    //axios.delete('http://localhost:8080/duck/delete/{id}')
    //.then((res) => {console.log(res)}
    //).catch(err => console.error(err));      

});

