const scriptURL =
  "https://script.google.com/macros/s/AKfycbz0yfsZBzBC1FhR06aPDhLZXP1ZbA0PNE8HX9g_961_vY1vfaJolC0Bx0wekqAgPcrsag/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for subscribe!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      console.log("Submit Success!");
      form.reset();
    })

    .catch((error) => console.error("Error!", error.message));
});
console.log("Script Loaded!");

function generateDateReg() {
  let today = new Date().toLocaleDateString("en-GB");
  console.log("Date has been loaded " + today);
  let current = new Date().toLocaleTimeString("en-GB");
  console.log("Time has been loaded " + current);
  document.getElementById("Reg").value = today;
  document.getElementById("RegTime").value = current;
  return true;
}
