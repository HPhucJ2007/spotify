import {
    userOptionElement,
    nonUpdatedInfo,
    nonSupportedElements,
    headerElement,
    playlistOptionWrapper,
    songElement,
    headerPlayBtn,
    headerPlaylistName,
    playlistLikeBtn,
    contentBackgroundColor,
    contentBackgroundImage,
    songDesElement
} from '../constants.js';

import {
    clickOpenEvents,
    headerScroll,
    playlistLikeClickEvent,
    preventNormalSpaceEvent
} from './playlist-simpleevents.js';

import {
    showNonSupportedMessage,
    showNonUpdatedInfo
} from '../toast.js';

import audioEvents from './playlist-audio.js'

// //////////////////////////////////////////////////////////////////

function start() {
    // Audio Events
    audioEvents(songs);

    // Header Scroll Events
    headerScroll(headerElement, headerPlayBtn, headerPlaylistName, contentBackgroundImage, contentBackgroundColor, songDesElement);

    // Non Supported Message
    nonSupportedElements.forEach((element) => {
        element.onclick = function () {
            showNonSupportedMessage();
        }
    })

    // Non Updated Info
    nonUpdatedInfo.forEach(function (element) {
        element.onclick = function () {
            showNonUpdatedInfo();
        }
    })

    // Playlist Like Button Click Event
    playlistLikeClickEvent(playlistLikeBtn);


    // Click Events
    clickOpenEvents(userOptionElement, playlistOptionWrapper, songElement);

    // Prevent Default Event Of Spacebar
    preventNormalSpaceEvent();

    // Console
    console.log('%cChúc bạn một ngày tốt lành 😊', 'color: #1BB954; font-size: 15px');
    console.log('%cHave a nice day 😊', 'color: #1BB954; font-size: 15px');
};
start();