import Header from "components/Commons/Header/Header";

import { useTranslation } from "react-i18next";

const Debt = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('ADD_DEBT')}/>
    </>
  );
}

export default Debt