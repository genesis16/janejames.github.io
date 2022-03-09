import styled from '@emotion/styled';
import React from 'react';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .content{
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--white);
  }

  & > .fact {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const Facts = () => {
  return (
    <StyledSkewedSection angle={10}>
      <StyledH1>Why you should hire a professional web developer</StyledH1>
      <StyledLogoSection>
        <StyledFactContent>
          <span className="content">
<span>&#8226;</span>&nbsp;&nbsp;Many businesses today decide to build or maintain their own website when they are starting out to try and save money. </span>
        </StyledFactContent>
        <StyledFactContent>
          <span className="content">
          <span>&#8226;</span>&nbsp;&nbsp;And this may work for a while, until your business outgrows it, or you run into technical problems you don't know how to resolve.</span>
        </StyledFactContent>
        <StyledFactContent>
          <span className="content">
          <span>&#8226;</span>&nbsp;&nbsp;But the truth is, the money you 'save' in the short term, costs you tens of thousands later on in adwords and SEO services. And the reason for that is your schema is not built for SEO, your speed is horrible, you lack content and therefore your search-ability is low.</span>
        </StyledFactContent>
        <StyledFactContent>
          <span className="content">
          <span>&#8226;</span>&nbsp;&nbsp;All professional businesses have an in house developer or outsource their web maintenance to an agency. As your website grows, the technical requirements expand beyond what you can manage yourself.</span>
        </StyledFactContent>
        <StyledFactContent>
          <span className="content">
          <span>&#8226;</span>&nbsp;&nbsp;40% of consumers will abandon a page that takes longer than 3 seconds to load. Is this business you can afford to lose?</span>
        </StyledFactContent>
      </StyledLogoSection>
    </StyledSkewedSection>
  );
};

export default Facts;
