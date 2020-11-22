import React from "react";
import styled from "styled-components";
import { About } from "./../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>{" "}
      </h2>
      <div className="question">
        <h4>How Do i Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            consequatur!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            consequatur!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Deifferent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            consequatur!
          </p>
        </div>
      </div>
      <div className="question">
        <h4>What Products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
            consequatur!
          </p>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)``;

export default FaqSection;
