function copyCitation() {
  /* Get the text field */
  var text = document.getElementById("textCitation");

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(text.textContent);
} 
