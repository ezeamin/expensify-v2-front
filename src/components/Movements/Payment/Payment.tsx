import Header from "components/Commons/Header/Header";

import { useTranslation } from "react-i18next";


const Payment = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t('ADD_PAYMENT')}/>
    </>
  );
}

export default Payment