import { IInfluencer } from '../types/influencer';

const getLinkObj = (label: string, display?: string, uri?: string) => ({
  display,
  label,
  uri,
});

export const prepInfluencerLinks = ({
  primary_display,
  primary_uri,
  facebook_uri,
  facebook_display,
  instagram_uri,
  instagram_display,
  youtube_uri,
  youtube_display,
  web_uri,
  web_display,
  twitch_uri,
  twitch_display,
  wikipedia_uri,
  wikipedia_display,
  twitter_uri,
  twitter_display,
}: IInfluencer) => {
  const allLinks = [];
  allLinks.push(getLinkObj('Primary', primary_display, primary_uri));
  allLinks.push(getLinkObj('Facebook', facebook_display, facebook_uri));
  allLinks.push(getLinkObj('Instagram', instagram_display, instagram_uri));
  allLinks.push(getLinkObj('YouTube', youtube_display, youtube_uri));
  allLinks.push(getLinkObj('Web', web_display, web_uri));
  allLinks.push(getLinkObj('Twitch', twitch_display, twitch_uri));
  allLinks.push(getLinkObj('Wikipedia', wikipedia_display, wikipedia_uri));
  allLinks.push(getLinkObj('Twitter', twitter_display, twitter_uri));
  return allLinks;
};

export const getPlatformFromURL = (url: string = ''): string => {
  if (url.toLowerCase().includes('facebook')) {
    return 'facebook';
  } else if (url.toLowerCase().includes('instagram')) {
    return 'instagram';
  } else if (url.toLowerCase().includes('twitter')) {
    return 'twitter';
  } else if (url.toLowerCase().includes('twitch')) {
    return 'twitch';
  } else if (url.toLowerCase().includes('youtube')) {
    return 'youtube';
  } else    {
    return 'unknown';
  }
};

const TEXT_TRIM_MIN_LENGTH = 240;
export const formatNewsText = (text: string = '') => {
  let shortened = text;
  if (text.indexOf(' ', TEXT_TRIM_MIN_LENGTH) > 0) {
    shortened = `${text.substring(0,  text.indexOf(' ', TEXT_TRIM_MIN_LENGTH))}...`;
  }
  return shortened.replace('Read more...', '');
};
