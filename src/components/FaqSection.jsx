import React from "react";
import Toggle from "./Toggle";
import styled from "styled-components";
import { About } from "./../styles";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>{" "}
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do i Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              consequatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              consequatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              consequatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      <AnimateSharedLayout>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
              consequatur!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .fag-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      font-size: 1rem;
    }
  }
`;

export default FaqSection;
