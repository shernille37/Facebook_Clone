import React from 'react';
import '../../Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import img from '../../assets/images/Jersey.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow src={img} title='Shernille Licud' />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title='COVID-19 Information Center'
      />
      <SidebarRow Icon={EmojiFlagsIcon} title='Friends' />
      <SidebarRow Icon={PeopleIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreIcon} title='Marketpace' />
    </div>
  );
};

export default Sidebar;
