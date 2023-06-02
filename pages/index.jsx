import Layout from "../components/Layout";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Home() {
  return (
    <Layout>
      <div className="flex h-full flex-col justify-center items-center">
        <div className="max-w-5xl">
          <h4 className="text-4xl mb-5">Greetings </h4>
          <p className="text-lg mb-4 leading-8 text-justify">
            Dear Reviewer, Welcome to my tech task landing page! I appreciate
            the time you are dedicating to reviewing and reading through this
            code. I understand that this project may have some areas that could
            be improved and might not adhere to the best practices. However, I
            wanted to showcase the breadth of knowledge I have acquired during
            my development journey. Given the time constraints of just 72 hours,
            I aimed to provide a high-quality solution within a shorter
            timeframe. I am aware that there may be alternative architectural
            approaches and improvements that could be made, and I would love to
            engage in a discussion with you about them. Your feedback and
            insights are invaluable to me, and I look forward to hearing your
            thoughts on how I can enhance the architecture and approach of this
            project. Please feel free to provide any suggestions or
            recommendations you may have. Once again, thank you for your time
            and consideration. I truly appreciate your contribution to this
            review process. Best regards,
          </p>
          <p className="text-sm">Bassam Fouad</p>
        </div>
      </div>
    </Layout>
  );
}
