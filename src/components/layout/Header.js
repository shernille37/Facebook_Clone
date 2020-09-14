import React from 'react';
import '../../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from '@material-ui/core';
import img from '../../assets/images/Jersey.jpg';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt='Facebook Logo'
        />

        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large' />
        </div>

        <div className='header__option'>
          <FlagIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SubscriptionsIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <StorefrontIcon fontSize='large' />
        </div>
        <div className='header__option'>
          <SupervisorAccountIcon fontSize='large' />
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={img} />
          <h4>Shernille Licud</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
