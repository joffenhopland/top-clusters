import React, { useState, useRef, useEffect } from "react";
import "./faq-accordion.styles.css";
import { FiPlus } from "react-icons/fi";

export default function FaqAccordion() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);
  const contentRef7 = useRef(null);

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

  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);

  useEffect(() => {
    contentRef6.current.style.maxHeight = active6
      ? `${contentRef6.current.scrollHeight}px`
      : "0px";
  }, [contentRef6, active6]);

  useEffect(() => {
    contentRef7.current.style.maxHeight = active7
      ? `${contentRef7.current.scrollHeight}px`
      : "0px";
  }, [contentRef7, active7]);

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
  const toggleAccordion5 = () => {
    setActive5(!active5);
  };
  const toggleAccordion6 = () => {
    setActive6(!active6);
  };
  const toggleAccordion7 = () => {
    setActive7(!active7);
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
                What is keyword clustering?
                </h4>
                <FiPlus
                  className={active1 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider` : `answer`}
              >
                <p>
                Keyword clustering is a technique used by SEO professionals to group a set of target search terms, or keywords, into relevant categories (clusters). A single cluster includes a core topic and several related subtopics, which support and point back to the core topic. Keyword clustering allows you to target many keywords per page, rather than only one or two keywords, creating additional opportunities for content to be found online. 
                {'\n'}
                {'\n'}
                After conducting keyword research, SEO professionals will group these keywords into clusters and distribute them across various pages of a website or use them in their marketing content in an effort to rank higher in search engine results pages (SERPs).
                </p>
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
                How does keyword clustering work?
                </h4>
                <FiPlus
                  className={active2 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider` : `answer`}
              >
                <p>
                Top Clusters uses live, country-specific Google SERP data to identify URLs that are ranking for similar keywords. To cluster keywords, we analyse the top 10 ranking pages for a keyword, and if keywords have 3 or more URLs in common, we determine that they are a cluster.
                {'\n'}
                {'\n'}
                Keyword clustering is useful for a number of purposes, such as improving the organization and structure of a website, search engine optimization, content marketing, and other areas of digital marketing, as well as generating new content ideas.
                </p>
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
                How many keywords can you support?
                </h4>
                <FiPlus
                  className={active3 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef3}
                className={active3 ? `answer answer-divider` : `answer`}
              >
                <p>We can support up to 10,000 keywords at a time</p>
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
                How do credits work?
                </h4>
                <FiPlus
                  className={active4 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef4}
                className={active4 ? `answer answer-divider` : `answer`}
              >
                <p>
                    1 credit = 1 keyword. For example, to analyse and cluster 1000 keywords, you'll need 1000 credits.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active5}`}
            onClick={toggleAccordion5}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                    What keyword research tools do you support?
                </h4>
                <FiPlus
                  className={active5 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef5}
                className={active5 ? `answer answer-divider` : `answer`}
              >
                <p>
                    We support export files from Ahrefs and SEMRush. You can also upload a custom CSV file as long as you make sure you have a "keyword" column and a "volume" column.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active6}`}
            onClick={toggleAccordion6}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                Why do I have no_cluster i my report?
                </h4>
                <FiPlus
                  className={active6 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef6}
                className={active6 ? `answer answer-divider` : `answer`}
              >
                <p>
                No_cluster simply means those keywords don't share at least 3 URLs with any other keyword.
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="question-container">
          <button
            className={`question-section ${active7}`}
            onClick={toggleAccordion7}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                Is a credit card required?
                </h4>
                <FiPlus
                  className={active7 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef7}
                className={active7 ? `answer answer-divider` : `answer`}
              >
                <p>A credit card is not required to start using our keyword clustering tool. Upon registration you will receive 150 free credits. If you want to analyse more than 150 keywords, a credit card is required to buy more credits.</p>
              </div>
            </div>
          </button>
        </div>
    </div>
  );
}