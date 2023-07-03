import { ReactComponent as EmailLogo } from './assets/email-logo.svg'
import { ReactComponent as HomeLogo } from './assets/home-logo.svg'
import { ReactComponent as PhoneLogo } from './assets/phone-logo.svg'


import './css/contact.css'

const Contact = ({ address, phone_number, email }) => {
    return (
        <div>
            <h2 className="sidebar__title">Contact</h2>
            <div className="contact">
            <div className="contact__info">
                <HomeLogo />
                <p>{address}</p>
            </div>
            <div className="contact__info">
                <PhoneLogo />
                <p>{phone_number}</p>
            </div>
            <div className="contact__info">
                <EmailLogo />
                <a href="mailto: wendy.cheang.trinity@gmail.com">
                    {email}
                </a>
            </div>
            </div>
        </div>
    )
}

export default Contact;