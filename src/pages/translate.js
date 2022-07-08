import { React, Fragment } from 'react';
import styles from './Translate.module.css';
import SelectLang from '../components/translate/SelectLang';
import Buttons from '../components/translate/Buttons';
import Header from '../components/common/Header';
import State from '../components/common/State';
import TranslateField from '../components/translate/TranslateField';
function Translate() {
  return (
    <Fragment>
      <Header />
      <State>
        <p className={styles.text}>추출된 텍스트</p>
      </State>
      <main>
        <div className={styles.container}>
          <div className={styles.section}>
            <SelectLang />
          </div>
          <div className={styles.section}>
            <TranslateField />
          </div>
          <div className={styles.section}>
            <Buttons />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Translate;
