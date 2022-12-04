import OptionsItem from './OptionsItem';

import { options } from 'constants/settingsOptions/optionsList';
import { OptionsItemType } from '../types';

const Options = () => {
  return (
    <>
      {options.map((option: OptionsItemType, index) => (
        <OptionsItem {...option} key={index} delay={index * 75} />
      ))}
    </>
  );
};

export default Options;
