import Footer from "@/components/footer";
import HeaderNav from "@/components/header";

function AboutPage() {
    return (
        <>
            <HeaderNav />
            <main >
                <h1 className="text-center text-4xl my-5" >About me</h1>
                <p className="text-center mx-70 text-[#9C9C9C]">
                    I’m Jonas, a web development student with a strong focus on front-end technologies and digital design. What drives me is the satisfaction of creating websites that not only look good but actually feel good to use. I enjoy working with HTML, CSS, and JavaScript, and recently I’ve been diving into frameworks like React and tools like Tailwind CSS and Figma to expand my skill set.
                    What I love most is the creative freedom in web development—finding the balance between technical structure and visual expression. Whether it's designing a simple landing page or building a small web app, I’m always looking for new ways to improve both performance and usability.
                    Outside of coding, I’m a huge fan of photography and love capturing street life and nature—my favorite camera right now is the Fujifilm X-T30. I also enjoy making music with Ableton Live, and when I need to relax, I dive into games like *The Witcher 3* or *Hades*. These hobbies help me stay creative and think in different ways, which I believe makes me a better developer too.
                    I’m curious by nature and always open to learning new things. My goal is to keep growing through hands-on projects, real-world experience, and good collaboration.
                </p>
            </main>
            <Footer />
        </>
    );
}

export default AboutPage;