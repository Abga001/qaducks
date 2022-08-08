'use strict';


document.querySelector("body > section > form").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("THIS:", this);

    const body = {
        name: event.target.name.value,
        species: event.target.species.value,
        age: event.target.age.value
    };

    console.log("BODY:", body);

    axios.post("http://localhost:8080/createDino", body)
        .then(response => {
            console.log(response);
            event.target.reset();
            event.target.name.focus();
        })
        .catch(err => console.error(err));
});