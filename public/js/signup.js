// this document will contain the code to grab in from page and sent to backend

const signupFormHandler = async function (event) {
  event.preventDefault();
  // Creating all of the element selectors
  // IN ENGLISH Finds the ID and saves the value as declared variable
  const first_nameEl = document.querySelector("#company");
  const last_nameEl = document.querySelector("#company");
  const emailEl = document.querySelector("#company");
  const passwordEl = document.querySelector("#password-input-signup");
  const passwordEl2 = document.querySelector("#password2");
  const companyEl = document.querySelector("#company");
  const linkedinEl = document.querySelector("#company");
  const githubEl = document.querySelector("#company");
  const professionEl = document.querySelector("#company");
  const person_or_companyEl = document.querySelector("#company");
  const cityEl = document.querySelector("#company");
  const notmatchingEl = document.querySelector("#notmatching");

  if (passwordEl === passwordEl2) {
    const response = await fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify({
        // look over models to declare KEY Value pairings
        // User Database
        first_name: first_nameEl,
        last_name: last_nameEl,
        email: emailEl,
        password: passwordEl,
        // Profile Database
        linked_in: linkedinEl,
        github: githubEl,
        company: companyEl.value,
        profession: professionEl,
        person_or_company: person_or_companyEl,
        city: cityEl,
      }),
      headers: { "Content-Type": "application/json" }, //Auth token here
    });
  } 

  if (response.ok) {
    document.location.replace("/LPSignedIn");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#submit-btn")
  .addEventListener("submit", signupFormHandler);
