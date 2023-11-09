/* HTML & CSS Uppgift 2 - Kristoffer Bengtsson */

/* Some minor tweaks to make the primitive burger menu a little more user friendly */

document.addEventListener("DOMContentLoaded", function () {
  // Allow the burger menu button to be used with the keyboard too
  // Maybe a bit unnecessary since phones/tablets usually have no keyboard, but for easier testing...
  let menubutton = document.getElementById("nav-button");
  menubutton.addEventListener("keydown", (e) => {
    // User hits the return or enter key when the button has focus, toggle the menu state checkbox
    let menutoggle = document.getElementById("nav-toggle");
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      menutoggle.checked = !menutoggle.checked;
    }
  });

  // Close the menu automatically when a menu option is clicked, since we navigate within the same page
  let menuoptions = document.querySelectorAll("#mainmenu li");
  if (menuoptions && menuoptions.length > 0) {
    // Go through all the menu options and add a click event handler to them
    menuoptions.forEach((menuoption) => {
      menuoption.addEventListener("click", (e) => {
        // Uncheck the menu open state checkbox when the link is clicked, closing the menu
        let menutoggle = document.getElementById("nav-toggle");
        menutoggle.checked = false;
      });
    });
  }
});
