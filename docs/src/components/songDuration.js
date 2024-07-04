/*
JamWaveZ: A web-based music player application for playing and managing copyright-free sample music provided within the app.
Copyright (C) [2024] [Aakash Yadav]
This file is part of [JamWaveZ].

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// 1. Display specificSongDuration in the DOM

import { accessSongsArray } from './initializeModifySongsArray.js';

const specificSongDurationArray = Array.from(document.getElementsByClassName('specific-song-duration'));

let localSongsArray = accessSongsArray();

const displaySpecificSongDuration = async () => {
  specificSongDurationArray.forEach((individualSongDuration, index) => {
    individualSongDuration.innerText = localSongsArray[index].formattedDuration;
  });
}

export { displaySpecificSongDuration };