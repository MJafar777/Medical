import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ListOfSettings.module.scss';
import {
  LanguageIcon,
  RightIcon,
  ThemeIcon,
} from '@/shared/assets/Pages/Settings';
import { ButtonsContext } from '@/shared/lib/context/ButtonsContext';

const ListOfSettings = () => {
  const { t } = useTranslation();
  const { isOpenThemeOrLanguage, setIsOpenThemeOrLanguage } =
    useContext(ButtonsContext);

  return (
    <div className={cls.ListOfSettingsWrapper}>
      <div
        className={`${cls.Language} ${isOpenThemeOrLanguage ? cls.IsOpen : ''}`}
        onClick={() => setIsOpenThemeOrLanguage(true)}
      >
        <div className={cls.LanguageLeft}>
          <LanguageIcon />
          <p>{t('Tilni o‘zgartirish')}</p>
        </div>
        <RightIcon className={cls.span} />
      </div>

      <div
        onClick={() => setIsOpenThemeOrLanguage(false)}
        className={`${cls.Theme} ${!isOpenThemeOrLanguage ? cls.IsOpen : ''}`}
      >
        <div className={cls.ThemeLeft}>
          <ThemeIcon />
          <p>{t('Mavzuni o‘zgartirish')}</p>
        </div>
        <RightIcon className={cls.span} />
      </div>
    </div>
  );
};

export default ListOfSettings;
