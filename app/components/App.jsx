import React from 'react';
import { Button } from './Button';
import { UserInfo } from './UserInfo';
import styles from '../styles/app.css';

const CommonMaxWidth = ({ children }) => (
  <div className={styles['max-width']}>
    {children}
  </div>
);

export default function App() {
  return (
    <section>
      <header className={styles.header}>
        <CommonMaxWidth>
          <strong>Source</strong><span style={{ fontWeight: 300 }}>Sage</span> <small style={{ fontWeight: 300, letterSpacing: 3, fontSize: 11, marginLeft: 7 }}>Frontend Challenge</small>
          <div
            style={{
              margin: 0,
              padding: 0,
              marginLeft: 7,
              textAlign: 'right',
              float: 'right',
            }}
          >
          <UserInfo
            name="Fill in your name here!"
          />
          </div>
        </CommonMaxWidth>
      </header>
      <CommonMaxWidth>
        <h1>
          Dear <strong>Potential Candidate</strong>,<br />
        </h1>
        <p>
        Congrats on making it this far!
        </p>
        <p>
          We've made this challenge to simulate a typical workflow working on the frontend.
        </p>
        <h1>Instructions:</h1>
        <p>
          <ol>
            <li>Fill in your name at the top right corner.</li>
            <li>Remaining instructions are in <code>/app/components/Button/index.jsx</code>.</li>
            <li>Once you're done, create a git branch named <code>your-name/challenge</code>, and create a pull request to <a href="https://github.com/SourceSage/sourcesage-challenges">this repository</a></li>
          </ol>
        </p>
        <p>
          You're not expected to finish all of this, we just want to see how much of our frontend stack you can pick up within the time given, and your ability to make fix an existing codebase, amongst other things.
        </p>
        <p>
        All the best!<br /><br />
        <em>Andrew</em><br />
        - The <strong>Source</strong>Sage Engineering Team
        </p>
        <p>
        p.s. feel free to drop me an email at <code>andrew@sourcesage.co</code> when you need to clarify anything.
        </p>
      </CommonMaxWidth>
      <div className={styles['challenge-accepted']}>
        <div className={styles['button-container']}>
          <Button>Change me!</Button>
        </div>
      </div>
    </section>
  );
}
