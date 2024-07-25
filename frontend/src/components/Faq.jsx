import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is Netflix?',
    answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!',
  },
  {
    question: 'How much does netflix cost?',
    answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.',
  },
  {
    question: 'Where can i watch netflix?',
    answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
  },
  {
    question: 'Is netflix good for kids?',
    answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
  },
  
];

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-medium">{question}</h3>
      {isOpen ? <Minus /> : <Plus />}
    </div>
    <div
      className={`overflow-hidden transition-max-height duration-500 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
    >
      <p className="mt-2">{answer}</p>
    </div>
  </div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-black text-white pt-5">
      <h3 className="text-center text-6xl font-extrabold mb-5">
      Frequently Asked Questions
      </h3>
    <div className="max-w-4xl mx-auto p-4 ">
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
    </div>
  );
};

export default Faq;
