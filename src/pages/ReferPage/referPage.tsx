import { RICAddress } from 'constants/polygon_config';
import { HeaderContainer } from 'containers/main/HeaderContainer';
import { ReferContainer } from 'containers/main/ReferContainer';
import { MainLayout } from 'containers/MainLayout';
import { useShallowSelector } from 'hooks/useShallowSelector';
import React, { FC } from 'react';
import { selectMain } from 'store/main/selectors';
import styles from './stylesReferPage.module.scss';

interface IProps {}

const ReferPage: FC<IProps> = () => {
  const {
    address,
    balances,
  } = useShallowSelector(selectMain);

  return (
    <MainLayout>
      <div className={styles.header}>
        <HeaderContainer balance={balances && balances[RICAddress]} address={address || 'Connect Wallet'} />
      </div>
      <div className={styles.content}>
        <ReferContainer />
      </div>
    
    </MainLayout>
  );
};

export default ReferPage;
