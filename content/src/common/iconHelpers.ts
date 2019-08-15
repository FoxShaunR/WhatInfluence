import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { getPlatformFromURL } from './data';

export const getInfluencerIconFromURL = (primaryUri?: string) => {
  switch (getPlatformFromURL(primaryUri)) {
    case 'facebook':
      return faFacebook;
    case 'instagram':
        return faInstagram;
    case 'twitter':
        return faTwitter;
    case 'twitch':
        return faTwitch;
    case 'youtube':
        return faYoutube;
    default:
      return faNewspaper;
  }
};
