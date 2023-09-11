import Card from "@/components/Card";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/HeroContainer";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  const cardData = [
    {
      src: "/images/illustration-grow-together.svg",
      title: "Grow Together",
      info: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    },
    {
      src: "/images/illustration-flowing-conversation.svg",
      title: "Flowing Conversations",
      info: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    },
    {
      src: "/images/illustration-your-users.svg",
      title: "Your Users",
      info: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    },
  ];
  return (
    <>
      <HeroContainer>
        <Navbar />
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center mt-10 px-4 md:space-x-16 md:px-0">
            <div className="space-y-8 mb-8 text-center md:text-start md:mb-0 md:w-1/2">
              <h1 className="font-semibold text-2xl md:text-5xl">
                Build The Community Your Fans Will Love
              </h1>
              <p className="text-lg">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
              <button className="bg-[#fe52c0] text-white py-3.5 px-16 md:py-3 md:px-14 text-md rounded-full hover:bg-pink-300 transition-colors duration-300">
                Get Started For Free
              </button>
            </div>

            <div className="flex items-center justify-center py-5 md:w-1/2">
              <Image
                src={"/images/illustration-mockups.svg"}
                alt="mockups"
                width={400}
                height={200}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </Wrapper>
      </HeroContainer>
      <section>
        <Wrapper>
          {cardData.map((card, i) => (
            <div
              key={i}
              className="my-8 shadow-md flex flex-col items-center justify-center odd:md:flex-row-reverse even:md:flex-row bg-white rounded-xl md:mt-16"
            >
              <Card src={card.src} title={card.title} info={card.info} />
            </div>
          ))}
        </Wrapper>
      </section>
      <Footer />
    </>
  );
}
