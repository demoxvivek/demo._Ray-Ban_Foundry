import React from 'react';
import styled from 'styled-components';

const SocialMediaBar = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media(max-width: 600px){
    justify-content: center;
  }
`;

const SocialMediaLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
`;

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  filter: grayscale(100%); /* Makes the icon black and white */
`;

const SocialMedia = () => {
  return (
    <SocialMediaBar>
      <SocialMediaLink href="https://www.facebook.com" target="_blank">
        <SocialMediaIcon src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.twitter.com" target="_blank">
        <SocialMediaIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1024px-X_logo_2023.svg.png" alt="Twitter" />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.instagram.com" target="_blank">
        <SocialMediaIcon src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.pinterest.com" target="_blank">
        <SocialMediaIcon src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" />
      </SocialMediaLink>
      <SocialMediaLink href="https://www.youtube.com" target="_blank">
        <SocialMediaIcon src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
      </SocialMediaLink>
    </SocialMediaBar>
  );
};

export default SocialMedia;
