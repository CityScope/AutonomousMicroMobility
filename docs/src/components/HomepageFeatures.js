import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_open_source_1qxw.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('../../static/img/undraw_researching_22gp.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Develop your own code',
    Svg: require('../../static/img/undraw_programmer_imem.svg').default,
    description: (
      <>
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
