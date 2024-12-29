import React from 'react';
import styles from './Sidebar.module.scss';
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg';
import { ReactComponent as AdditionIcon } from '../../assets/svg/addition.svg';
import { ReactComponent as HomeIcon } from '../../assets/svg/home.svg';
import { ReactComponent as FolderIcon } from '../../assets/svg/folderCloud.svg';
import { ReactComponent as GridIcon } from '../../assets/svg/gridView.svg';
import { ReactComponent as ProgrammingArrowIcon } from '../../assets/svg/programmingArrows.svg';
import { ReactComponent as SearchStatusIcon } from '../../assets/svg/searchStatus.svg';
import { ReactComponent as ScrollIcon } from '../../assets/svg/scroll.svg';
import { ReactComponent as ReportsIcon } from '../../assets/svg/reports.svg';
import { ReactComponent as PeopleIcon } from '../../assets/svg/people.svg';
import { ReactComponent as GridViewIcon } from '../../assets/svg/gridView.svg';
import { ReactComponent as HelpIcon } from '../../assets/svg/help.svg';
import { ReactComponent as FeedbackIcon } from '../../assets/svg/feedback.svg';


const Sidebar = () => {
  return <div className={styles.sidebar}>
    <MenuIcon className={styles.iconTop} />
    <AdditionIcon className={styles.icon} />
    <HomeIcon className={styles.icon} />
    <FolderIcon className={styles.foldericon} />
    <GridIcon className={styles.icon} />
    <ProgrammingArrowIcon className={styles.icon} />
    <SearchStatusIcon className={styles.icon} />
    <ScrollIcon className={styles.icon} />
    <ReportsIcon className={styles.icon} />
    <PeopleIcon className={styles.icon} />
    <GridViewIcon className={styles.icon} />
    <HelpIcon className={styles.icon} />
    <FeedbackIcon className={styles.icon} />
  </div>;
};

export default Sidebar;
