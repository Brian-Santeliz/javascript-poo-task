const form = document.getElementById("form");

class handleSubmit {
  constructor(title, date, description) {
    this.title = title;
    this.date = date;
    this.description = description;
  }
  Submit() {
    if (
      this.title.trim() === "" ||
      this.date.trim() === "" ||
      this.description.trim() === ""
    ) {
      return console.log("TODOS LOS CAMPOS SON OOBLIGATORIOS");
    }
    console.log(this.title, this.date, this.description);
    form.reset();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //inputs
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const ejemplo = new handleSubmit(title, date, description);
  ejemplo.Submit();
});
