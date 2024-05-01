import React from 'react';
import "./Header.css" ;
import SearchIcon from '@mui/icons-material/Search';
import CottageIcon from '@mui/icons-material/Cottage';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'; 
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar, IconButton } from '@mui/material';
import WidgetsTwoToneIcon from '@mui/icons-material/WidgetsTwoTone';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user}] = useStateValue();
  return (
  <div className="header">
   <div className="header_left">
      <img
       src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" 
       alt=""/>

           <div className="searches">
              <SearchIcon />
              <input placeholder='Search Facebook'
               type ="text"/>
           </div>
   </div>
 <div className="header_center">
       <div className="icons
       icons--active">
            <CottageIcon fontSize='large' />
       </div>
       <div className="icons">
            <FlagCircleIcon fontSize='large' />
       </div>
       <div className="icons">
            <SubscriptionsIcon fontSize='large' />
       </div>
       <div className="icons">
            <StorefrontIcon fontSize='large' />
       </div>
       <div className="icons">
            <SupervisorAccountIcon fontSize='large' />
       </div>  
       
 </div>

<div className="header_right">
    <IconButton>
       <WidgetsTwoToneIcon />  
    </IconButton>

    <IconButton>
       <MessageIcon />  
    </IconButton>

    <IconButton>
       <NotificationsIcon />  
    </IconButton>

    <IconButton>
       <ExpandMoreIcon  />  
    </IconButton>

    <div className='info'>
       <Avatar src={user.photoURL} />
  </div> 
</div>

</div>
)
}
export default Header;