import React, { useState, useRef, useEffect } from "react";
import "./faq-accordion.styles.css";
import { FiPlus } from "react-icons/fi";

export default function FaqAccordion() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };
  const toggleAccordion2 = () => {
    setActive2(!active2);
  };
  const toggleAccordion3 = () => {
    setActive3(!active3);
  };
  const toggleAccordion4 = () => {
    setActive4(!active4);
  };
  return (
    <div className="accordion-container">
        <div className="question-container">
          <button
            className={`question-section ${active1}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                How does keyword clustering work?
                </h4>
                <FiPlus
                  className={active1 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active2}`}
            onClick={toggleAccordion2}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                How many keywords can you support?
                </h4>
                <FiPlus
                  className={active2 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active3}`}
            onClick={toggleAccordion3}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                How do credits work?
                </h4>
                <FiPlus
                  className={active3 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef3}
                className={active3 ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active4}`}
            onClick={toggleAccordion4}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                What keyword research tools do you support?
                </h4>
                <FiPlus
                  className={active4 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef4}
                className={active4 ? `answer answer-divider` : `answer`}
              >
                <p>Because I love coding</p>
              </div>
            </div>
          </button>
        </div>
    </div>
  );
}