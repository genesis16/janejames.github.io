import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TagList from '../components/tag-list';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledSection } from '../components/_shared/styled-section';

const StyledBlogSection = styled(StyledSection)``;

const StyledBlogTitle = styled.span`
  font-size: 48px;
  line-height: 58px;
  font-weight: 600;
  color: #1f1f1f;
  display: block;
  padding-bottom: 5px;
`;
const StyledImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem;
`;
const StyledBlogSubtitleWrap = styled.div`
  display: flex;
`;
const StyledBlogSubtitle = styled.a`
  font-size: 13px;
  line-height: 21px;
  font-weight: 500;
  color: #777;
  text-transform: uppercase;
  padding-right: 5px;
  letter-spacing: 1.95px;
  cursor: pointer;
`;
const StyledBlogWrap = styled.div`
  display: flex;
`;
const StyledBlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  padding: 2rem 2rem;
`;
const StyledBlogInfoInner = styled.div`
  margin-bottom: 1rem;
`;

const StyledBlogInfoTitle = styled.span`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: #1f1f1f;
  display: block;
`;
const StyledBlogInfoDescription = styled.span`
  font-size: 13px;
  line-height: 21px;
  font-weight: 500;
  color: #777;
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
const StyledBlogText = styled.div`
  padding: 2rem 0rem;
  width: 100%;
  background: var(--bg-code);
  border-radius: var(--radius);
  color: #777;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  font-size: 16px;
  line-height: 27px;
  font-weight: 400;
`;

const FeatureProject = ({ data }) => {
  const projectData = data.markdownRemark;
  const coverImage = projectData.frontmatter.cover_image
    ? projectData.frontmatter.cover_image.childImageSharp.gatsbyImageData
    : null;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <StyledImageWrap>
        <img src={projectData.frontmatter.cover_image.publicURL} alt={projectData.frontmatter.title} />
      </StyledImageWrap>
      <StyledBlogSection>
        {/* {coverImage && <GatsbyImage image={coverImage} alt={projectData.frontmatter.title} />} */}
        <StyledBlogTitle>{projectData.frontmatter.title} </StyledBlogTitle>
        <StyledBlogSubtitleWrap>
          <StyledBlogSubtitle href={projectData.frontmatter.demo_link} target="_blank">
            Web project
          </StyledBlogSubtitle>
          <StyledBlogSubtitle>-</StyledBlogSubtitle>
          <StyledBlogSubtitle href={projectData.frontmatter.demo_link} target="_blank">
            WordPress
          </StyledBlogSubtitle>
        </StyledBlogSubtitleWrap>
        <StyledBlogWrap>
          <StyledBlogText dangerouslySetInnerHTML={{ __html: projectData.html }} />
          <StyledBlogInfo>
            <StyledBlogInfoInner>
              <StyledBlogInfoTitle>Client</StyledBlogInfoTitle>
              <StyledBlogInfoDescription>{projectData.frontmatter.title}</StyledBlogInfoDescription>
            </StyledBlogInfoInner>
            <StyledBlogInfoInner>
              <StyledBlogInfoTitle>Project Date</StyledBlogInfoTitle>
              <StyledBlogInfoDescription>{projectData.frontmatter.date}</StyledBlogInfoDescription>
            </StyledBlogInfoInner>
            <StyledBlogInfoInner>
              <StyledBlogInfoTitle>Techs</StyledBlogInfoTitle>
              <StyledBlogInfoDescription>{projectData.frontmatter.techs}</StyledBlogInfoDescription>
            </StyledBlogInfoInner>
          </StyledBlogInfo>
        </StyledBlogWrap>
      </StyledBlogSection>
    </Layout>
  );
};

FeatureProject.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeatureProject;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        repo_link
        demo_link
        techs
        date(formatString: "D. MMMM YYYY")
        cover_image {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
