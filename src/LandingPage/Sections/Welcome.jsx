import styled, { keyframes } from "styled-components";
import Image from "../../assets/banner.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  background-color: #04090C;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: auto;
  }
`;

const FirstDiv = styled.div`
  width: 100%;
  margin: auto;
`;
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SecondDiv = styled.div`
  width: 100%;
  padding-left: 3rem;
  padding-top: 3rem;
  margin:auto;

  .animate-slow-bounce {
     animation: ${rotateAnimation} 600s linear infinite;
  }

  @media (max-width: 768px) {
    padding: auto;
    padding-top: 0;
`;

const Welcome = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <FirstDiv>
          <h2 className="text-sm text-[#BF9444] capitalize font-bold">
            Welcome to Restho
          </h2>
          <h1 className="text-6xl text-white capitalize ">
            Find Your Healthy & Tasty Food
          </h1>
          <p className="pt-8 font-normal text-[#BF9444]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <div className="pt-4 flex flex-wrap">
            <button className="px-12 py-2 hover:bg-[#BF9444] hover:text-white rounded-full border-2 border-solid border-[#BF9444] text-[#BF9444] font-semibold mr-4">
              Get Started
            </button>
          </div>
        </FirstDiv>
        <SecondDiv>
          <img
            src={Image}
            width={500}
            height={400}
            alt="picture"
            className=""
          />
        </SecondDiv>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Welcome;
