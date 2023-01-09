import React from 'react';
import SideBarColumn from './SideBarColumn';
import './SideBar.css';
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const[{user}, dispatch] = useStateValue();
  
  return (
    <div className="sideBar">
      <SideBarColumn src={user.photoURL} title={user.displayName}/>
      <SideBarColumn
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"

      />
      <SideBarColumn Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarColumn Icon={PeopleIcon} title="Friends" />
      <SideBarColumn Icon={ChatIcon} title="Messanger" />
      <SideBarColumn Icon={StorefrontIcon} title="Marketplace" />
      <SideBarColumn Icon={VideoLibraryIcon} title="Videos" />
      <SideBarColumn Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default Sidebar;