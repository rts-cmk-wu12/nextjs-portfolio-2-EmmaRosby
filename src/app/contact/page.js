import Footer from "@/components/footer";
import HeaderNav from "@/components/header";

function ContactPage() {
    return (
        <>
            <HeaderNav />

            <main >
                <h1 className="text-center text-4xl my-5" >Get In Touch</h1>
                <p className="text-center mx-70 text-[#9C9C9C]">

                    Thanks for stopping by!<br />
                    If you're looking for a motivated and detail-oriented web developer with a strong interest in front-end technologies and clean, responsive design—I’d love to hear from you.
                    Whether it’s about a project, an internship, or just a quick conversation, feel free to reach out. I'm always open to new opportunities and ways to grow.
                </p>

                <form className="flex flex-col items-center mt-10 mx-130">
                    <div className="w-full ">
                        <label className="text-[#757575] flex text-left mb-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="Please enter your email"
                            className="border bg-[#f8f8f8] rounded-md p-2 mb-4 w-1/3 text-[#757575] w-full"
                        />
                    </div>
                    <div className="w-full ">
                        <label className="text-[#757575] flex text-left mb-1">Moblie</label>
                        <input
                            type="tel"
                            placeholder="Enter mobile"
                            className="border bg-[#f8f8f8] rounded-md p-2 mb-4 w-1/3 text-[#757575] w-full"
                        />
                    </div>
                    <div className="w-full ">
                        <label className="text-[#757575] flex text-left mb-1">Message</label>
                        <textarea
                            placeholder="Enter your message"
                            className="border bg-[#f8f8f8] rounded-md p-2 mb-4 w-1/3 h-32 text-[#757575] w-full"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#3f8e00] text-white px-6 py-2 rounded-md hover:bg-[#62BA1B] w-full"
                    >
                        Send Message
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
}

export default ContactPage;