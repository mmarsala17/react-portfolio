import React, { useState} from "react";
import { validateEmail, checkBlank } from "../..utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid =  validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage("The Email used is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage('${e.target.name} is required.');
                } else {
                    setErrorMessage("");
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			const isValid = checkBlank(e.target.value);
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

    return (
        <section>
            <div className="center">
            <h2 className="page-header">Contact</h2>
            </div>
            <div>
            <form id="contact-form">
                <div>
                    <label htmlFor="Name">Name:</label>
                    <br></br>
                    <input
                        type="text"
                        defaultValue={name}
                        onBlur={handleBlank}
                        name="Name"
                        />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input type="email"
                    defaultValue={email}
                    name="email"
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Message">Message</label>
                    <br></br>
                    <textarea
                        name="message"
                        defaultValue={message}
                        onBlur={handleBlank}
                        rows="5"
                        />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </div>
        </section>
    );
}

export default Contact;