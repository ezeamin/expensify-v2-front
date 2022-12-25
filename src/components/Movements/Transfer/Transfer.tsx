import Header from 'components/Commons/Header/Header';

import { useTranslation } from 'react-i18next';

const Transfer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('ADD_TRANSFER')} />
    </>
  );
};

export default Transfer;
