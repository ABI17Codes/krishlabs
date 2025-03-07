import React from "react";
import { Images } from "../assets/Images";

const BlogDetails = () => {
  return (
    <div>
      <div className="bg-[#011502] w-full h-28 -mt-20"></div>
      <div className="bg-[#eaf7eb] pt-5">
        <div className="lg:mx-96 md:mx-50 sm:mx-40 mx-5 bg-white px-5 py-2">
          <p className="md:text-xl text-lg font-bold mt-3">
            Crafting Captivating Headlines: Your awesome post title goes here
          </p>
          <p className="mt-3">JAN 24,2025</p>
          <div className="cursor-pointer w-full flex justify-center">
            <img
              className="object-cover transition duration-500 hover:scale-110 mt-5"
              src={Images.Image3}
              alt="Image3"
            />
          </div>
          <p className="mt-3 text-black/70">
            Engaging Introductions: Capturing Your Audience’s Interest The
            initial impression your blog post makes is crucial, and that’s where
            your introduction comes into play. Hook your readers with a
            captivating opening that sparks curiosity or emotion. Address their
            pain points or questions to establish a connection. Outline the
            purpose of your post and give a sneak peek into what they can
            expect. A well-crafted introduction sets the tone for an immersive
            reading experience. Crafting Informative and Cohesive Body Content
            Within the body of your blog post lies the heart of your message.
            Break down your content into coherent sections, each with a clear
            heading that guides readers through the narrative. Dive deep into
            each subtopic, providing valuable insights, data, and relatable
            examples. Maintain a logical flow between paragraphs using
            transitions, ensuring that each point naturally progresses to the
            next. By structuring your body content effectively, you keep readers
            engaged and eager to learn more. Powerful Closures: Leaving a
            Lasting Impression Concluding your blog post isn’t just about
            wrapping things up – it’s your final opportunity to leave a strong
            impact. Summarize the key takeaways from your post, reinforcing your
            main points. If relevant, provide actionable solutions or
            thought-provoking questions to keep readers thinking beyond the
            post. Encourage engagement by inviting comments, questions, or
            sharing. A well-crafted conclusion should linger in your readers’
            minds, inspiring them to explore further or apply what they’ve
            learned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
