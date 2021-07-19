import React from 'react';
import ControlledTabs from './Tabs';
import LanguageProvider from '../Language/LanguageProvider';
import Translator from './Translator';
import defaultMsg from '../Language/DefaultMessages';
// This this is the main component of body after header

export default function Main() {
  return (
    <LanguageProvider>
      <br />
      <div>
        <div className="container mr-auto pl-5">
          <h1 className="top-header">
        <b>{Translator('header', defaultMsg.msg.err)}</b>
          </h1>
        </div>
        <br />
        <div className="container mr-auto pl-5">
          <ControlledTabs />
        </div>
      </div>
    </LanguageProvider>
  );
}
