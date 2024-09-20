// hooks/useLanguageData.js
import { useEffect, useState } from 'react';
import data_set from '../utils/landingPage/data';
import french_data_set from '../utils/landingPage/french';

// import about_set from '../utils/about/about_set';

import { LanguageContext } from '@/components/context/LanguageContext';
import french_about_set from '@/utils/about/french_about_set';
import about_sets from '@/utils/about/about_sets';

const useLanguageData = (pageType?:string) => {
  const { languageValue } = LanguageContext();
  const [languageData, setLanguageData] = useState(data_set);

  useEffect(() => {
    switch (pageType) {
      case 'about_section':
        setLanguageData(languageValue === 'FRN' ? french_about_set : about_sets); // Adjust this to handle different languages if needed
        break;
      default:
        setLanguageData(languageValue === 'FRN' ? french_data_set : data_set);
        break;
    }
  }, [languageValue, pageType]);

  return languageData;
};

export default useLanguageData;
