import "./Order.scss";
import ButtonMain from "../ButtonMain/ButtonMain";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";

function Order() {
    const validateEmail = (email) => {
        const reg =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    };

    function validate(input, alert, submit, err1) {
        let submitForm = submit;

        if (input.value === "") {
            submitForm = false;

            if (!input.classList.contains("error")) {
                input.classList.add("error");
            }

            if (input.value === "") {
                alert.innerText = err1;
            }
        } else {
            if (input.classList.contains("error")) {
                input.classList.remove("error");
            }
            alert.innerText = "";
        }

        return submitForm;
    }

    function validateForEmail(input, alert, submit, err1, err2) {
        let submitForm = submit;

          if (input.value === "" || !validateEmail(input.value)) {
              submitForm = false;

              if (!input.classList.contains("error")) {
                  input.classList.add("error");
              }
              if (input.value === "") {
                  alert.innerText = err1;
              }
              if (input.value !== "" && !validateEmail(input.value)) {
                  alert.innerText = err2;
              }
          } else {
              if (input.classList.contains("error")) {
                  input.classList.remove("error");
              }
              alert.innerText = "";
          }

        return submitForm;
    }

    const btnOrderClick = (event) => {
        event.preventDefault();

        const err1 = "Поле обязательно для заполнения";
        const err2 = "Email введён некорректно";

        const alertAddress = document.getElementById("address-error");
        const alertName = document.getElementById("name-error");
        const alertSurname = document.getElementById("surname-error");
        const alertEmail = document.getElementById("email-error");
        const alertPhone = document.getElementById("phone-error");

        const inputAddress = document.getElementById("address");
        const inputRoom = document.getElementById("room");
        const inputFloor = document.getElementById("floor");
        const inputPorch = document.getElementById("porch");
        const inputName = document.getElementById("name");
        const inputSurname = document.getElementById("surname");
        const inputEmail = document.getElementById("email");
        const inputPhone = document.getElementById("phone");

        const textareaComment = document.getElementById("comment");

        let submitForm = true;

        submitForm = validate(inputAddress, alertAddress, submitForm, err1);
        submitForm = validate(inputName, alertName, submitForm, err1);
        submitForm = validate(inputSurname, alertSurname, submitForm, err1);
        submitForm = validate(inputPhone, alertPhone, submitForm, err1);
        submitForm = validateForEmail(inputEmail, alertEmail, submitForm, err1, err2);

        if (submitForm) {
            const dataForm = {
                address: inputAddress.value,
                room: inputRoom.value,
                floor: inputFloor.value,
                porch: inputPorch.value,
                comment: textareaComment.value,
                email: inputEmail.value,
                name: inputName.value,
                surname: inputSurname.value,
                phone: inputPhone.value,
            };
            console.log(dataForm);
        }
    };

    return (
        <section className="order">
            <form action="" className="order__form">
                <h1 className="order__title">Оформление заказа</h1>
                <div className="order__chapter">
                    <h2 className="order__chapter-title">Адрес доставки</h2>

                    <div className="order__form-group">
                        <Input id="address" type="text" placeholder="Город, улица, номер дома*" />
                        <span id="address-error" className="order__error"></span>
                    </div>

                    <div className="order__form-group">
                        <div className="order__adress-detail">
                            <Input id="room" type="text" placeholder="Кв/офис" />
                            <Input id="floor" type="text" placeholder="Этаж" />
                            <Input id="porch" type="text" placeholder="Подъезд" />
                        </div>
                    </div>

                    <div className="order__form-group">
                        <Textarea id="comment" placeholder="Комментарий к заказу" />
                    </div>
                </div>
                <div className="order__chapter">
                    <h2 className="order__chapter-title">Получатель</h2>

                    <div className="order__form-group">
                        <Input id="name" type="text" placeholder="Имя*" />
                        <span id="name-error" className="order__error"></span>
                    </div>

                    <div className="order__form-group">
                        <Input id="surname" type="text" placeholder="Фамилия*" />
                        <span id="surname-error" className="order__error"></span>
                    </div>

                    <div className="order__form-group">
                        <Input id="email" type="text" placeholder="Электронная почта*" />
                        <span id="email-error" className="order__error"></span>
                    </div>

                    <div className="order__form-group">
                        <Input id="phone" type="text" placeholder="Номер телефона*" />
                        <span id="phone-error" className="order__error"></span>
                    </div>
                </div>

                <ButtonMain onClick={btnOrderClick} title="Оформить заказ" className="order__btn" />
            </form>
        </section>
    );
}

export default Order;
