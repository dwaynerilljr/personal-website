import { useState } from "react"
import { send } from "emailjs-com"

export default function ContactForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
        'g-recaptcha-response': '6Ld75T4dAAAAACVMxLk2AdBK8gJdEuOu76iTJ4GX'
    });

    const resetForm = () => {
        setToSend({...toSend,
            from_name: '',
            message: '',
            reply_to: '',
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value })
        console.log(toSend)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_6ma93jd',
            'template_pkl9qpv',
            toSend,
            'user_mRImIACaJ9pAAR5f5Ampd'
        )
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text)
            })
            .catch((err) => {
                console.log('ERROR!', err)
            })
        resetForm();
    }



    return (
        <div className="md:col-span-4 rounded-md flex xl:h-full md:py-8 md:text-base text-sm justify-center">
            <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-y-2 p-3 md:p-7 bg-white shadow-2xl md:w-10/12 border-2 lg:h-full border-secondary">
                <input 
                    type="text" 
                    placeholder="Your Name"
                    className="bg-transparent placeholder-current font-semibold border-b border-secondary text-ternary py-2 outline-none"
                    autoComplete="new-password"
                    name="from_name"
                    value={toSend.from_name}
                    required
                    onChange={handleChange}
                />
                {/* <label htmlFor="" className="font-secondary border-b-2 border-secondary w-4/12 text-2xl">Your Email</label> */}
                <input 
                    type="email"
                    placeholder="Your Email"
                    className="bg-transparent placeholder-current border-b font-semibold border-secondary text-ternary py-2 outline-none"
                    autoComplete="new-password"
                    name="reply_to"
                    value={toSend.reply_to}
                    required
                    onChange={handleChange}
                />
                {/* <label htmlFor="" className="font-secondary border-b-2 border-secondary w-4/12 text-2xl">Your Message</label> */}
                <textarea 
                    placeholder="Your Message.."
                    className="bg-transparent placeholder-current border-b font-semibold border-secondary text-ternary py-2 outline-none resize-none overflow-y-scroll"
                    autoComplete="new-password"
                    name="message"
                    value={toSend.message}
                    required
                    onChange={handleChange}
                    cols="30" 
                    rows="7" 
                />
                <div className="g-recaptcha" data-sitekey="6Ld75T4dAAAAAJlqagywWsOWjAkPR8bfavW-bfm1"></div>
                <button type="submit" className="border border-secondary hover:bg-secondary hover:text-white p-2 w-5/6 text-ternary font-semibold rounded-3xl self-center mt-5">Submit</button>
            </form>
        </div>
    )
}
