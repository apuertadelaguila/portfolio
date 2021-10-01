import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import service from './api/services/contact-service';
import AOS from 'aos';
import "aos/dist/aos.css";
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const validations = {
    name: (value) => {
        let message;
        if (!value) {
            message = "Name is required";
        } else if (value.length < 4) {
            message = "Name needs at least 4 chars"
        }
        return message
    },
    email: (value) => {
        let message;
        if (!value) {
            message = 'A valid email is required';
        } else if (!EMAIL_PATTERN.test(value)) {
            message = 'The email is invalid';
        }
        return message;
    },
    text: (value) => {
        let message;
        if (!value) {
            message = "Text is required";
        }
        return message
    },
};

const Contact = () => {


    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    const [state, setState] = useState({
        contact: {
            name: "",
            email: "",
            text: "",
        },
        errors: {
            name: validations.name(),
            email: validations.email(),
            text: validations.text(),
        },
        touch: {},
    });

    const isValid = () => {
        const { errors } = state;
        return !Object.keys(errors).some(error => errors[error]);
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setState(state => ({
            ...state,
            touch: {
                ...state.touch,
                [name]: true
            }
        }));
    }

    const handleChange = (event) => {
        let { name, value } = event.target;

        setState(state => {
            return {
                ...state,
                contact: {
                    ...state.contact,
                    [name]: value,
                },
                errors: {
                    ...state.errors,
                    [name]: validations[name] && validations[name](value),
                },
            };
        });
    };
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Sending...');
        if (isValid()) {
            try {
                const data = { ...state.contact }
                await service.sendMail(data);
                router.push('/');
            } catch (error) {
                console.error(error)
            }
        }
    }

    const { contact, errors, touch } = state;

    return (
        <div className="contact" data-aos="fade">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" className={`form-control ${touch.name && errors.name ? "is-invalid" : ""
                        }`} value={contact.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your name..." required />
                    <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div>
                    <input type="email" name="email" className={`form-control ${touch.email && errors.email ? "is-invalid" : ""
                        }`} value={contact.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email..." required />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>
                <div>
                    <textarea
                        name="text"
                        type="text"
                        className={`form-control ${touch.text && errors.text ? "is-invalid" : ""
                            }`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={contact.text}
                        id="text"
                        placeholder="Message..."
                        rows="4"
                    ></textarea>
                    <div className="invalid-feedback">{errors.text}</div>
                </div>
                <button className="btn btn-primary" type="submit" disabled={!isValid()}>
                    Send Email
                </button>
            </form>
        </div>
    );
}

export default Contact;