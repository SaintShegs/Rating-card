const button = document.querySelectorAll(".rating-number");
let prior_selected_button_id = null;

button.forEach((element) => {
    
    element.addEventListener("click", () => {
        const rating = element.innerText;
        console.log(rating);
        
      let current_button_id = element.getAttribute("id");


      if ( (prior_selected_button_id !== null) && (current_button_id !== prior_selected_button_id) ) {

        // Get prior selected button node
        const PRIOR_SELECTED_BUTTON = document.getElementById(prior_selected_button_id);

        // Remove selected class
        PRIOR_SELECTED_BUTTON.classList.remove("selected");

        // Add indicator to current selected button
        element.classList.add("selected");

        // Remind app of which button has been selected
        prior_selected_button_id = current_button_id;

      } else {
        
        // Remind app of which button has been selected
        prior_selected_button_id = current_button_id;

        // Add indicator to selected button
        element.classList.add("selected");

      }
      
    




    const submit = document.querySelector(".rating-button");

    submit.addEventListener("click", () => {
      const pages = document.querySelectorAll(".rating-card");
      const response = document.querySelector(".response");

      pages[0].classList.add("hidden");
      pages[1].classList.remove("hidden");

      response.innerHTML = "You selected " + rating + " out of 5";
    });
  });
});
