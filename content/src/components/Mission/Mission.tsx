import React from 'react';
import { Link } from 'react-router-dom';
import ViewContainer from '../ViewContainer/ViewContainer';

import styles from './Mission.module.css';

const Mission = () => {
  return (
    <div className={styles.main}>
      <span className={styles.title}>Mission</span>
      <ViewContainer>
        <p className={styles.text}>
          Culture has undergone dramatic shifts over the past decade. With the rise of social media and
          streaming entertainment, it has become possible for nearly anyone to build a following of interested
          viewers. While lowering the barrier to stardom can be beneficial, it also makes it impossible for parents
          and other concerned parties to remain aware of the social impact every one of these self-made stars has
          had on both their online and real-world communities.
        </p>
        <p className={styles.text}>
          This site is intended to provide a means to research the influencers driving both entertainment and commerce
          online. News aggregation, sentiment analysis, and determining what kind of impact an influencer has had
          on their audience and society as a whole is mostly automatic. This allows the site to remain unbiased when
          evaluating an influencer (or at least, we aren't adding a bias that isn't already in the sources we
          aggregate). Due to the automated nature of the site, it's possible that a news article may be
          categorized incorrectly. Please use our contact form to report any issues so they can be addressed as
          quickly as possible.
        </p>
        <p className={styles.text}>
          We're also selective about the influencers we feature. In order to avoid infringing on the personal lives
          of people who aren't seeking to be in the public eye, we only track influencers who meet certain criteria
          such as number of followers or prominence in news reporting. If you know of an influencer you'd like to see
          added to the site, use our contact form, and we'll review your submission as soon as possible.
        </p>
        <Link className={styles.contact} to="/contact">Contact</Link>
      </ViewContainer>
    </div>
  );
};

export default Mission;
