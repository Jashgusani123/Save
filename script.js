function show() {
    let div = document.querySelector("#conteinar");
    div.innerHTML = ` <h1>User Information Card</h1>
<p><span>First Name:</span> ${localStorage.getItem("firstname")} </p>
<p><span>Last Name:</span> ${localStorage.getItem("lastname")}</p>
<p><span>Country:</span> ${localStorage.getItem("country")}</p>
<p><span>Phone Number:</span> ${localStorage.getItem("phoneNumber")}</p>
<p><span>State:</span> ${localStorage.getItem("state")}</p>
<p><span>City:</span> ${localStorage.getItem("city")}</p>
<p><span>Village:</span> ${localStorage.getItem("village")}</p>`;
}


function setin() {
    if (localStorage.length == 0) {
        let fname = prompt("Enter Your First Name :- ");
        let lname = prompt("Enter Your Last Name :- ");
        let country = prompt("Enter Your Country Name :- ");
        let pno = parseInt(prompt("Enter Your Phone Number :- "));
        let state = prompt("Enter Your State Name :- ");
        let city = prompt("Enter Your City Name :- ");
        let village = prompt("Enter Your Village Name :- ");
        localStorage.setItem("firstname", fname);
        localStorage.setItem("lastname", lname);
        localStorage.setItem("country", country);
        localStorage.setItem("phoneNumber", pno);
        localStorage.setItem("state", state);
        localStorage.setItem("city", city);
        localStorage.setItem("village", village);
        show();
    }else{
        show();
    }


}
setin();


