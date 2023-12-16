import React from "react";
import "./SwipeButtons.css";

import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnTwoToneIcon from '@mui/icons-material/FlashOnTwoTone';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayTwoToneIcon className="swipeButtons__repeat" />
            </IconButton>
            <IconButton>
                <CloseTwoToneIcon className="swipeButtons__left" />
            </IconButton>
            <IconButton>
                <StarIcon className="swipeButtons__star" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButtons__right" />
            </IconButton>
            <IconButton>
                <FlashOnTwoToneIcon className="swipeButtons__lightning" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;