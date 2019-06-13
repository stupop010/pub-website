class Hamburger {
  constructor() {
    this.hamburger = document.querySelector(".hamburger");
    this.moblieMenu = document.querySelector(".moblie-menu");
    this.hamburgerClick = this.hamburger.addEventListener(
      "click",
      this.onClick
    );
  }
  onClick = () => {
    if (this.hamburger.className.match("active")) {
      this.hamburger.classList.remove("active");
      this.moblieMenu.classList.remove("active");
    } else {
      this.hamburger.classList.add("active");
      this.moblieMenu.classList.add("active");
    }
  };
}

class Form {
  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.subject = "";
    this.enquiry = "";
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.phoneInput = document.querySelector("#phone");
    this.subjectInput = document.querySelector("#subject");
    this.enquiryInput = document.querySelector("#enquiry");
    this.formBtn = document.querySelector(".form-btn");

    this.nameInput.addEventListener("keyup", this.onChange);
    this.emailInput.addEventListener("keyup", this.onChange);
    this.phoneInput.addEventListener("keyup", this.onChange);
    this.subjectInput.addEventListener("keyup", this.onChange);
    this.enquiryInput.addEventListener("keyup", this.onChange);
    this.formBtn.addEventListener("click", this.onSubmit);
  }

  onChange = e => {
    this[e.target.name] = e.target.value;
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      enquiry: this.enquiry
    };
    console.log(data);
    //Send data to back end

    //reset form
    document.getElementById("enquiry-form").reset();
  };
}

const hamburger = new Hamburger();
const form = new Form();
console.log(form);
