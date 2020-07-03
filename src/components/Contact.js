import React from 'react'
import { ContactSection, Title, Form, FormInput, FormSubject, Textarea, FormBtn } from './ContactStyle'

export default function Contact() {
    return (
        <div >
            <ContactSection >
                <Title>Leave Us a Message</Title>
                <Form className="form">
                    <FormInput required type="text" placeholder="Your Name" />
                    <FormInput required type="email" placeholder="Your Email" />
                    <FormSubject required type="text" placeholder="Your Subject" />
                    <Textarea required type="text" placeholder="Your Message" />
                    <FormBtn required type="submit" placeholder="Your Name" value="Send Message" />
                </Form>
            </ContactSection>
        </div>
    )
}
