import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';

// import Languages
import English from '../Translation/en.json';
import German from '../Translation/de.json';

export default function LanguageProvider(props) {
  // state functions
  const [locale, setLocale] = useState('en');
  const [lang, setLang] = useState(English);

  // change Langauage files
  const changeLang = getLang => {
    setLocale(getLang);
    getLang === 'en' ? setLang(English) : setLang(German);
  };

  return (
    <IntlProvider locale={locale} messages={lang}>
      <div className="container-fluid">
        <DropdownButton
          id="language-dropdown"
          variant="secondary"
          title="Language"
        >
          <Dropdown.Item
            onClick={() => changeLang('en')}
            as="button"
            title="en"
          >
            English
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => changeLang('de')}
            as="button"
            title="de"
          >
            German
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div>{props.children}</div>
    </IntlProvider>
  );
}
