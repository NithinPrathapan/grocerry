import React, { useEffect, useState } from "react";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import SingleBanner from "../../COMPONENTS/Banners/SingleBanner";
import Footer1 from "../../COMPONENTS/Footer/Footer1";
import Footer2 from "../../COMPONENTS/Footer/Footer2";
const FAQ = () => {
  const [activeSection, setActiveSectin] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const image =
    "https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg";

  const faq = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      id: 4,
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 5,
      question: "Where can I get some?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
  ];
  return (
    <div className="extrapage">
      <Navbar />
      <SingleBanner heading="FAQ" image={image} />
      <div className="faqcontainer">
        {/* {activeSection === 1 ? (
          <div className="faq">
            <div className="faqhead">
              <h1>What is lorem ipsum</h1>
              <svg
                onClick={() => setActiveSectin(0)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="faqbody">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum pariatur voluptate, quis repellat dolores consectetur
                autem eos magnam dicta praesentium nam sit iusto rerum
                aspernatur temporibus? Iure quo ipsum optio culpa quaerat?
              </p>
            </div>
          </div>
        ) : (
          <div className="faq">
            <div className="faqhead">
              <h1>What is lorem ipsum</h1>
              <svg
                onClick={() => {
                  setActiveSectin(1);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        )} */}

        {faq.map((item, index) =>
          activeSection === item.id ? (
            <div className="faq">
              <div className="faqhead">
                <h1>{item.question}</h1>
                <svg
                  onClick={() => setActiveSectin(0)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="faqbody">
                <p>{item.answer}</p>
              </div>
            </div>
          ) : (
            <div className="faq">
              <div className="faqhead">
                <h1>{item.question}</h1>
                <svg
                  onClick={() => {
                    setActiveSectin(item.id);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          )
        )}
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default FAQ;
