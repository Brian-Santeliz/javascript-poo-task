class Alert {
  showAlert(tipo) {
    if (tipo === "error") {
      if (AlertaDom.querySelector("div")) {
        return;
      }
      const alert = document.createElement("div");
      alert.classList.add("alert", "alert-danger");
      alert.innerText = "TODOS LOS CAMPOS SON OBLIGATORIOS";
      AlertaDom.appendChild(alert);
      setTimeout(() => {
        AlertaDom.querySelector("div").remove();
      }, 3000);
    } else {
      const alert = document.createElement("div");
      alert.classList.add("alert", "alert-success");
      alert.innerText = "Agregado Satisfactoriamente!";
      AlertaDom.appendChild(alert);
      setTimeout(() => {
        AlertaDom.querySelector("div").remove();
      }, 3000);
    }
  }
}
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
      return alert.showAlert("error");
    }
    form.reset();
    alert.showAlert("exito");
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">

                <p>
                <strong>Titulo:</strong> <span style="border-radius:1em" class="bg-success text-white text-bold p-1"> ${this.title}</span></p>
                <p>
                <strong>Descripción:</strong> <span style="border-radius:1em" class="bg-info text-white text-bold p-1"> ${this.description}</span>
                </p>
                <p>
                <strong>Fecha Limite:</strong> <span style="border-radius:1em" class="bg-warning text-white text-bold p-1"> ${this.date}</span>
                </p>
                <button class="btn btn-danger text-white" id="delete">Eliminar</button>
            </div>
        </div>
    `;
    list.appendChild(card);
  }
}


const form = document.getElementById("form");
const AlertaDom = document.getElementById("alert");
const list = document.querySelector("#list");
const alert = new Alert();


form.addEventListener("submit", (e) => {
  e.preventDefault();
  //inputs
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const methods = new handleSubmit(title, date, description);
  methods.Submit();
});

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.id === "delete") {
    e.target.parentElement.parentElement.remove();
  }
});
