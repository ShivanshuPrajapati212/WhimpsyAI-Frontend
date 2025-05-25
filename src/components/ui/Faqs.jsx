import React from "react";

const Faqs = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl max-md:text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-2 w-[40vw] max-md:w-[90vw]">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">What is WhimpsyAI?</div>
          <div className="collapse-content text-sm">
            WhimpsyAI is a micro-learning app that delivers personalized,
            bite-sized lessons every day, tailored to your interests.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How does it choose what I learn?
          </div>
          <div className="collapse-content text-sm">
            You pick your interests when signing up, and our AI curates lessons
            based on those preferences—constantly evolving with your activity.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How long are the lessons?
          </div>
          <div className="collapse-content text-sm">
            Lessons take just 3–5 minutes to complete, making it easy to learn
            something new every day without disrupting your routine.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is WhimpsyAI free to use?
          </div>
          <div className="collapse-content text-sm">
            No, there is no free trial for Whimpsyai. You have to buy it.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What's included in the paid plans?
          </div>
          <div className="collapse-content text-sm">
            Full access to daily lessons, all topics, progress tracking,
            reminders, and future updates.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is this a subscription?
          </div>
          <div className="collapse-content text-sm">
            No. WhimpsyAI offers one-time payment plans: a 1-Year Pass or a
            Lifetime Deal. No recurring fees.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I use it on my phone?
          </div>
          <div className="collapse-content text-sm">
            Yes! WhimpsyAI is fully responsive and works seamlessly on mobile,
            tablet, and desktop.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is my data private?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. We never sell your data. Your preferences are used only
            to personalize your learning experience.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Who is WhimpsyAI for?
          </div>
          <div className="collapse-content text-sm">
            WhimpsyAI is for anyone curious—students, professionals, creatives,
            or anyone who wants to grow a little every day.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I restart or change my interests later?
          </div>
          <div className="collapse-content text-sm">
            Yes, you can update your interests anytime to get a fresh set of
            personalized lessons.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
