import { StateType } from 'app/storeTypes';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import es from 'lang/es';

const useLang = () => {
  const [lang, setLang] = useState(es);

  const selectedLanguage = useSelector(
    (state: StateType) => state.globalData.language
  );

  useEffect(() => {
    const getLang = async () => {
      const langImport = await import(`../lang/${selectedLanguage}.js`);
      setLang(langImport.default);
    };

    getLang();
  }, [selectedLanguage]);

  return lang;
};

export default useLang;
