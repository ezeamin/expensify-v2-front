import Header from "components/Commons/Header/Header";

import { useTranslation } from "react-i18next";

const Income = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('ADD_INCOME')}/>
    </>
  );
}

export default Income