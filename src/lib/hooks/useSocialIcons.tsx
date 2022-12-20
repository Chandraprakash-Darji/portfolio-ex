import { ReactElement } from 'react';

import { SocialNameType } from '@/lib/types';

import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from '@/Icons/socials';

const useSocialIcons = (): Record<SocialNameType, ReactElement> => {
  return {
    instagram: <InstagramIcon />,
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
    mail: <MailIcon />,
    twitter: <TwitterIcon />,
  };
};

export default useSocialIcons;
