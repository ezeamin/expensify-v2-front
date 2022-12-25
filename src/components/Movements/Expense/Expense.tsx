import Header  from "components/Commons/Header/Header";

import { useTranslation } from "react-i18next";

const Expense = () => {
  
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('ADD_EXPENSE')}/>
    </>
  );
};

export default Expense;
