<template>
  <div id="loading-action">
    <svg
      id="coverage1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      data-name="coverage1"
      viewBox="0 0 0 0"
      style="position: absolute; top: 0; left: 0; visibility: hidden; overflow: hidden; z-index: -1"
    >
      <defs>
        <linearGradient id="shade20" x1="128" y1="256" x2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.42" stop-color="#fcfeff" />
          <stop offset="0.75" stop-color="#f2faff" />
          <stop offset="1" stop-color="#e5f5ff" />
        </linearGradient>
        <radialGradient id="shade17" cx="128" cy="128" r="128" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#003d66" />
          <stop offset="0.2" stop-color="#003f69" />
          <stop offset="0.36" stop-color="#004573" />
          <stop offset="0.51" stop-color="#004f84" />
          <stop offset="0.65" stop-color="#005d9c" />
          <stop offset="0.78" stop-color="#0070bb" />
          <stop offset="0.91" stop-color="#0086e0" />
          <stop offset="1" stop-color="#09f" />
        </radialGradient>
        <symbol id="sea" data-name="sea" viewBox="0 0 256 256">
          <path
            id="sea-3"
            data-name="sea"
            class="cls-2"
            d="M255.2,142.1c-.1-8.6.8-9.3.8-14.1s-1.5-5.2-.8-14.1-2.4-7.4-2.3-14.2c0-12.2-4.7-13.3-6.4-20.1-2.3-9.4-5-8.2-9.2-18.2-3.5-8.5-6.1-7.6-8.2-12-3.4-6.9-8.7-7.9-11.7-13-4-6.9-9.2-9.2-14.1-11.9s-8.2-4.2-14.3-9.1-6.7-2.1-14.1-6.5S163.2,6,156.8,3.3c-4-1.8-7.1-2.5-13-2.3-7.6.2-10.5-1-15.8-1s-7.9.9-15.8,1c-5.7,0-9,.5-13,2.3s-9.7.5-18.1,5.6C75.8,12,72.8,11.1,67,15.4s-8.8,5.9-14.3,9.1S42,30,38.6,36.4s-8.3,6.1-11.7,13c-2.1,4.4-5.1,3.3-8.2,12C15,71.6,10.8,70.7,9.5,79.6c-1,6.5-5.6,8-6.4,20.1-.4,6.5-3.1,4.7-2.3,14.2S0,123.2,0,128s1.3,5.4.8,14.1,2.3,7.6,2.3,14.2c.1,11.5,5.6,15,6.4,20.1,1.3,8.9,6.3,9.4,9.2,18.2s6.1,7.6,8.2,12c3.4,6.9,8.3,8.2,11.7,13a33.7,33.7,0,0,0,14.1,11.9c8.1,4,9.5,5.2,14.3,9.1,7.5,5.9,6.7,2.1,14.1,6.5s12.3,2.9,18.1,5.6c4,1.9,7.3,2.3,13,2.3,7.2,0,10.5,1,15.8,1s8.2-1,15.8-1c4.2,0,10.1-.8,13-2.3,5-2.4,9.7-.5,18.1-5.6s6.3-1.5,14.1-6.5,5.5-4.7,14.3-9.1c5.5-2.7,10.2-6,14.1-11.9s8.3-6.1,11.7-13c2.1-4.4,5.2-3.2,8.2-12s7.2-9.4,9.2-18.2,5.4-8,6.4-20.1C253.4,149.8,255.4,151.6,255.2,142.1Z"
          />
        </symbol>
        <symbol id="ship" data-name="ship" viewBox="0 0 256 111.4">
          <g id="ship-3" data-name="ship">
            <path class="cls-3" d="M69.9,27.9c2.2-6.4,6.4-18.5,8.7-24.7C79.4.8,80.7,0,82.5,0h9.6c2.1,0,3.1,1.7,3.1,4.1V27.9Z" />
            <path class="cls-4" d="M87.2,0h4.9c2.1,0,3.1,1.7,3.1,4.1V27.9H90.3V4.1C90.3,1.7,89.2,0,87.2,0Z" />
            <path class="cls-5" d="M77.1,7.4C78.3,4.4,79-.2,82.5,0h9.6c2.1,0,3.1,1.7,3.1,4V7.4Z" />
            <path class="cls-6" d="M90.3,4c0-2.3-1.1-4-3.1-4h4.9c2.1,0,3.1,1.7,3.1,4V7.4H90.3Z" />
            <path class="cls-7" d="M95.2,11.6H75.6c.3-.8.5-1.5.8-2.2H95.2Z" />
            <rect class="cls-4" x="90.3" y="9.4" width="4.9" height="2.16" />
            <path class="cls-5" d="M121.1,32.7H44.9c-.2-4.2,1.7-8.2,4-8.2h72.2Z" />
            <path class="cls-6" d="M121.1,32.4H44.4c.1-1.2-.2-5.1.3-6.2h76.4Z" />
            <path class="cls-5" d="M40.3,30.2H171.6c5,0,7.2,3.6,7.2,7.7v6.5c-.1,1.8,1.5,2,2.7,1.9s4.1,2.1,4.1,4.7V69.1H31.7V38.9A8.4,8.4,0,0,1,40.3,30.2Z" />
            <path class="cls-7" d="M31.7,40.4h71.6c9.2,0,10.6,9.4,10.6,9.4h71.6a4.5,4.5,0,0,1,.1,1.1v17H31.7Z" />
            <path class="cls-7" d="M31.7,40.4H103c9.2,0,10.6,9.4,10.6,9.4H31.7Z" />
            <path class="cls-5" d="M80.2,22.1a3.8,3.8,0,0,1-4,3.7H57.4a3.7,3.7,0,0,1-3.9-3.7h0a3.7,3.7,0,0,1,3.9-3.6H76.2a3.8,3.8,0,0,1,4,3.6Z" />
            <path class="cls-6" d="M80.2,22.1a3.8,3.8,0,0,1-4,3.7H57.4a3.7,3.7,0,0,1-3.9-3.7h0a3.7,3.7,0,0,1,3.9-3.6H76.2a3.8,3.8,0,0,1,4,3.6Z" />
            <path class="cls-5" d="M75.4,23.5a3.9,3.9,0,0,0,4-3.7h0a4,4,0,0,0-3-1.3H57.3a3.9,3.9,0,0,0-4,3.7h0a4,4,0,0,0,3,1.3Z" />
            <path class="cls-8" d="M57.6,20.8c1.1-.2,12.1,1,8.6-1.4H57.6A.7.7,0,1,0,57.6,20.8Z" />
            <path class="cls-5" d="M115.5,22.1a3.8,3.8,0,0,1-3.9,3.7H92.7a3.7,3.7,0,0,1-3.9-3.7h0a3.7,3.7,0,0,1,3.9-3.6h18.9a3.8,3.8,0,0,1,3.9,3.6Z" />
            <path class="cls-6" d="M115.5,22.1a3.8,3.8,0,0,1-3.9,3.7H92.7a3.7,3.7,0,0,1-3.9-3.7h0a3.7,3.7,0,0,1,3.9-3.6h18.9a3.8,3.8,0,0,1,3.9,3.6Z" />
            <path class="cls-5" d="M110.7,23.5a3.9,3.9,0,0,0,4-3.7h0a4,4,0,0,0-3-1.3H92.6a3.9,3.9,0,0,0-4,3.7h0a4,4,0,0,0,3,1.3Z" />
            <path class="cls-8" d="M92.9,20.8c1.1-.2,12.1,1,8.6-1.4H92.9A.7.7,0,1,0,92.9,20.8Z" />
            <path class="cls-3" d="M31.7,58.5V71.2c-9.8,1.6-18.3,8.7-18.3,8.7l18.3.9V83H180.4V58.5Z" />
            <path class="cls-5" d="M190.1,60.8c0,1.9-2,3.4-4.5,3.4H31.2c-2.4,0-4.4-1.5-4.4-3.4h0c0-1.9,2-3.4,4.4-3.4H185.6c2.5,0,4.5,1.5,4.5,3.4Z" />
            <path class="cls-8" d="M190.1,60.8c0,1.9-2,3.4-4.5,3.4H31.2c-2.4,0-4.4-1.5-4.4-3.4h0c0-1.9,2-3.4,4.4-3.4H185.6c2.5,0,4.5,1.5,4.5,3.4Z" />
            <rect class="cls-4" x="31.7" y="60.6" width="148.7" height="4.94" />
            <path class="cls-5" d="M31.7,59.3c-2.4,0-4.3,1.4-4.4,3.2a4.9,4.9,0,0,0,3.9,1.7H185.6c2.4,0,4.4-1.4,4.4-3.2a4.5,4.5,0,0,0-3.8-1.7Z" />
            <path class="cls-6" d="M31.4,61a4.9,4.9,0,0,0-3.9,1.7,5,5,0,0,0,3.7,1.5H185.6a4.8,4.8,0,0,0,3.9-1.7,4.9,4.9,0,0,0-3.7-1.5Z" />
            <path
              class="cls-4"
              d="M210.3,99.8c.9-6.6,7.8-14.9,16.1-22.5H185.6V53.9l-5,.3c-20.1,3.9-19.8,27.1-50.3,22.7H105.4L37,77H16.5a2.4,2.4,0,0,1-1.1.9A5.7,5.7,0,0,1,13,81.1v3.6H4c3.3,5.4,8.1,11.7,10.7,15.1Z"
            />
            <path
              class="cls-7"
              d="M11.6,108.3a9.5,9.5,0,0,1,4.8-3.9S1.6,86,0,79.3l36.7-.2,68.4-.2H130c30.7,4.4,30.2-18.7,50.4-22.6,7.5-1,75.6,0,75.6,0s-44.8,29-45.9,46.2c0,0,.1,2.8,3.7,8.3l-201-.3A1.4,1.4,0,0,1,11.6,108.3Z"
            />
            <path
              class="cls-5"
              d="M247.7,62.1c-19.5-.2-59.2-.6-64.8.2-10.5-.4-20.6,18.1-32.8,21.8-5.2,1.6-10.3.8-15.6.8-43.9-.3-87.8.1-131.8.3,4.7,8.1,13.7,19.2,13.7,19.2-2.3.7-7.4,4.8-3.5,6l6.2.2,47.3.3,123.6.5c7.9.1,14.5-.2,22.3,0,4.4-.1,1.8-3.9.3-6-.3-.5-2.5-2.3-2.5-2.8C210.9,90.1,234.7,71.4,247.7,62.1Z"
            />
            <path
              class="cls-3"
              d="M19.1,110.6H66.4l123.6.6c7.4,0,14.9-.1,22.3,0,1.7-.2,2.4-.8,2.7-1.5a14,14,0,0,0-2.4-4.5,2.3,2.3,0,0,0-.7-.8c-65.3.1-130.9-.1-196.2,0l-.5.3h-.1a1,1,0,0,0-.5.4h-.2l-.4.4h-.2l-.4.3c0,.1,0,.1-.1.1a.8.8,0,0,1-.4.4c0,.1,0,.1-.1.1l-.3.4-.2.2-.2.3-.2.2a1.5,1.5,0,0,0,.9,2.6Z"
            />
            <path
              class="cls-4"
              d="M12.7,110.3l6.4.3H66.4l123.6.6c7.4,0,14.9-.1,22.3,0,1.7-.2,2.4-.8,2.7-1.5a14,14,0,0,0-2.4-4.5,2.3,2.3,0,0,0-.7-.8c-15.5.1-31,0-46.5,0-49.9.1-99.9-.1-149.7,0l-.5.3h-.1a1,1,0,0,0-.5.4h-.2l-.4.4h-.2l-.4.3c0,.1,0,.1-.1.1a.8.8,0,0,1-.4.4c0,.1,0,.1-.1.1l-.3.4-.2.2-.2.3-.2.2C10.9,108.6,11.8,110.4,12.7,110.3Z"
            />
            <path
              class="cls-3"
              d="M211.9,104.6c-65.3.1-130.9-.1-196.2,0l-.5.3h-.1a1,1,0,0,0-.5.4h-.2l-.4.4h-.2l-.4.3c0,.1,0,.1-.1.1a.8.8,0,0,1-.4.4c0,.1,0,.1-.1.1l-.2.3,6.5.2H37.4l29,.2L190,108c7.4.1,14.9-.1,22.3.1a5.8,5.8,0,0,0,1.7-.5,16.4,16.4,0,0,0-1.4-2.2A2.3,2.3,0,0,0,211.9,104.6Z"
            />
            <path class="cls-7" d="M187,70.3a2.4,2.4,0,0,1-2.4,2.4h0a2.5,2.5,0,0,1-2.5-2.4V67.6a2.5,2.5,0,0,1,2.5-2.5h0a2.5,2.5,0,0,1,2.4,2.5Z" />
            <path class="cls-7" d="M197.4,70.3a2.5,2.5,0,0,1-2.5,2.4h0a2.5,2.5,0,0,1-2.5-2.4V67.6a2.5,2.5,0,0,1,2.5-2.5h0a2.5,2.5,0,0,1,2.5,2.5Z" />
            <path class="cls-7" d="M207.7,70.3a2.5,2.5,0,0,1-2.5,2.4h0a2.4,2.4,0,0,1-2.4-2.4V67.6a2.5,2.5,0,0,1,2.4-2.5h0a2.5,2.5,0,0,1,2.5,2.5Z" />
            <path class="cls-7" d="M218,70.3a2.4,2.4,0,0,1-2.4,2.4h0a2.5,2.5,0,0,1-2.5-2.4V67.6a2.5,2.5,0,0,1,2.5-2.5h0a2.5,2.5,0,0,1,2.4,2.5Z" />
            <path class="cls-7" d="M228.2,70.3a2.5,2.5,0,0,1-2.5,2.4h0a2.4,2.4,0,0,1-2.4-2.4V67.6a2.5,2.5,0,0,1,2.4-2.5h0a2.5,2.5,0,0,1,2.5,2.5Z" />
            <path class="cls-6" d="M44.9,66.1c-6.4,0-6.4,9.6,0,9.5S51.3,66.1,44.9,66.1Z" />
            <path class="cls-9" d="M49.3,70.9c.1,5.6-9,5.6-8.9,0S49.4,65.3,49.3,70.9Z" />
            <path class="cls-10" d="M48.9,70.9c0,5-8.1,5-8,0S48.9,65.9,48.9,70.9Z" />
            <path class="cls-11" d="M48.3,70.9c.1,4.3-6.9,4.3-6.9,0S48.4,66.6,48.3,70.9Z" />
            <path class="cls-12" d="M41.4,70.9a3.6,3.6,0,0,0,.2,1,3,3,0,0,0,1.6.5,3.4,3.4,0,0,0,3.6-3.1,2.5,2.5,0,0,0-.1-1.2C44.5,66.7,41.3,68.3,41.4,70.9Z" />
            <path class="cls-6" d="M63.8,66.1c-6.4,0-6.4,9.6,0,9.5S70.1,66.1,63.8,66.1Z" />
            <path class="cls-9" d="M68.2,70.9c.1,5.6-9,5.6-8.9,0S68.3,65.3,68.2,70.9Z" />
            <path class="cls-10" d="M67.8,70.9c0,5-8.1,5-8.1,0S67.8,65.9,67.8,70.9Z" />
            <path class="cls-11" d="M67.2,70.9c0,4.3-6.9,4.3-6.9,0S67.3,66.6,67.2,70.9Z" />
            <path class="cls-12" d="M60.3,70.9a3.6,3.6,0,0,0,.2,1,2.8,2.8,0,0,0,1.6.5,3.4,3.4,0,0,0,3.6-3.1,2.5,2.5,0,0,0-.1-1.2C63.4,66.7,60.2,68.3,60.3,70.9Z" />
            <path class="cls-6" d="M82.6,66.1c-6.3,0-6.3,9.6,0,9.5S89,66.1,82.6,66.1Z" />
            <path class="cls-9" d="M87.1,70.9c.1,5.6-9,5.6-8.9,0S87.2,65.3,87.1,70.9Z" />
            <path class="cls-10" d="M86.7,70.9c0,5-8.1,5-8.1,0S86.7,65.9,86.7,70.9Z" />
            <path class="cls-11" d="M86.1,70.9c0,4.3-7,4.3-6.9,0S86.1,66.6,86.1,70.9Z" />
            <path class="cls-12" d="M79.2,70.9a3.6,3.6,0,0,0,.2,1,2.7,2.7,0,0,0,1.5.5,3.4,3.4,0,0,0,3.7-3.1,2.5,2.5,0,0,0-.1-1.2C82.3,66.7,79.1,68.3,79.2,70.9Z" />
            <path class="cls-6" d="M101.5,66.1c-6.4,0-6.4,9.6,0,9.5S107.9,66.1,101.5,66.1Z" />
            <path class="cls-9" d="M106,70.9c.1,5.6-9,5.6-8.9,0S106.1,65.3,106,70.9Z" />
            <path class="cls-10" d="M105.5,70.9c.1,5-8,5-8,0S105.6,65.9,105.5,70.9Z" />
            <path class="cls-11" d="M105,70.9c0,4.3-7,4.3-6.9,0S105,66.6,105,70.9Z" />
            <path class="cls-12" d="M98.1,70.9a3.6,3.6,0,0,0,.2,1,2.7,2.7,0,0,0,1.5.5,3.4,3.4,0,0,0,3.7-3.1,4.9,4.9,0,0,0-.1-1.2C101.2,66.7,98,68.3,98.1,70.9Z" />
            <path class="cls-6" d="M120.4,66.1c-6.4,0-6.4,9.6,0,9.5S126.8,66.1,120.4,66.1Z" />
            <path class="cls-9" d="M124.9,70.9c.1,5.6-9,5.6-9,0S125,65.3,124.9,70.9Z" />
            <path class="cls-10" d="M124.4,70.9c.1,5-8,5-8,0S124.5,65.9,124.4,70.9Z" />
            <path class="cls-11" d="M123.9,70.9c0,4.3-7,4.3-6.9,0S123.9,66.6,123.9,70.9Z" />
            <path class="cls-12" d="M117,70.9a3.6,3.6,0,0,0,.2,1,2.7,2.7,0,0,0,1.5.5,3.4,3.4,0,0,0,3.7-3.1,2.5,2.5,0,0,0-.2-1.2A3.4,3.4,0,0,0,117,70.9Z" />
            <path class="cls-6" d="M139.3,66.1c-6.4,0-6.4,9.6,0,9.5S145.7,66.1,139.3,66.1Z" />
            <path class="cls-9" d="M143.8,70.9c.1,5.6-9,5.6-9,0S143.9,65.3,143.8,70.9Z" />
            <path class="cls-10" d="M143.3,70.9c.1,5-8,5-8,0S143.4,65.9,143.3,70.9Z" />
            <path class="cls-11" d="M142.8,70.9c0,4.3-7,4.3-6.9,0S142.8,66.6,142.8,70.9Z" />
            <path class="cls-12" d="M135.9,70.9a3.6,3.6,0,0,0,.2,1,2.7,2.7,0,0,0,1.5.5,3.4,3.4,0,0,0,3.7-3.1,2.5,2.5,0,0,0-.2-1.2A3.4,3.4,0,0,0,135.9,70.9Z" />
            <path class="cls-6" d="M40.9,34.8c-8.5-.1-8.5,12.8,0,12.7S49.5,34.7,40.9,34.8Z" />
            <path class="cls-9" d="M46.9,41.2c.2,7.5-12.1,7.5-12,0S47.1,33.7,46.9,41.2Z" />
            <path class="cls-10" d="M46.3,41.2c.1,6.7-10.8,6.7-10.7,0S46.4,34.5,46.3,41.2Z" />
            <path class="cls-11" d="M45.5,41.2c.1,5.7-9.2,5.7-9.2,0S45.6,35.5,45.5,41.2Z" />
            <path class="cls-12" d="M36.3,41.2a3.5,3.5,0,0,0,.3,1.4,4.7,4.7,0,0,0,2.1.6,4.5,4.5,0,0,0,4.9-4.1,9.9,9.9,0,0,0-.2-1.7C40.5,35.6,36.2,37.8,36.3,41.2Z" />
            <path class="cls-6" d="M66.2,34.8c-8.5-.1-8.5,12.8,0,12.7S74.8,34.7,66.2,34.8Z" />
            <path class="cls-9" d="M72.2,41.2c.1,7.5-12.1,7.5-12,0S72.3,33.7,72.2,41.2Z" />
            <path class="cls-10" d="M71.6,41.2c.1,6.7-10.8,6.7-10.7,0S71.7,34.5,71.6,41.2Z" />
            <path class="cls-11" d="M70.8,41.2c.1,5.7-9.3,5.7-9.2,0S70.9,35.5,70.8,41.2Z" />
            <path class="cls-12" d="M61.6,41.2a3.5,3.5,0,0,0,.3,1.4,4.7,4.7,0,0,0,2,.6,4.5,4.5,0,0,0,5-4.1,5.1,5.1,0,0,0-.3-1.7C65.8,35.6,61.5,37.8,61.6,41.2Z" />
            <path class="cls-6" d="M91.5,34.8c-8.6-.1-8.6,12.8,0,12.7S100,34.7,91.5,34.8Z" />
            <path class="cls-9" d="M97.5,41.2c.1,7.5-12.1,7.5-12,0S97.6,33.7,97.5,41.2Z" />
            <path class="cls-10" d="M96.8,41.2c.1,6.7-10.8,6.7-10.7,0S96.9,34.5,96.8,41.2Z" />
            <path class="cls-11" d="M96.1,41.2c.1,5.7-9.3,5.7-9.2,0S96.2,35.5,96.1,41.2Z" />
            <path class="cls-12" d="M86.9,41.2a6.8,6.8,0,0,0,.2,1.4,4.7,4.7,0,0,0,2.1.6,4.5,4.5,0,0,0,4.9-4.1,3.3,3.3,0,0,0-.2-1.7C91.1,35.6,86.8,37.8,86.9,41.2Z" />
            <path class="cls-6" d="M116.8,34.8c-8.6-.1-8.6,12.8,0,12.7S125.3,34.7,116.8,34.8Z" />
            <path class="cls-9" d="M122.8,41.2c.1,7.5-12.2,7.5-12,0S122.9,33.7,122.8,41.2Z" />
            <path class="cls-10" d="M122.1,41.2c.1,6.7-10.8,6.7-10.7,0S122.2,34.5,122.1,41.2Z" />
            <path class="cls-11" d="M121.4,41.2c0,5.7-9.3,5.7-9.2,0S121.4,35.5,121.4,41.2Z" />
            <path class="cls-12" d="M112.2,41.2a6.8,6.8,0,0,0,.2,1.4,4.7,4.7,0,0,0,2.1.6,4.5,4.5,0,0,0,4.9-4.1,5,5,0,0,0-.2-1.7C116.3,35.6,112.1,37.8,112.2,41.2Z" />
            <path class="cls-6" d="M142,34.8c-8.5-.1-8.5,12.8,0,12.7S150.6,34.7,142,34.8Z" />
            <path class="cls-9" d="M148,41.2c.2,7.5-12.1,7.5-12,0S148.2,33.7,148,41.2Z" />
            <path class="cls-10" d="M147.4,41.2c.1,6.7-10.8,6.7-10.7,0S147.5,34.5,147.4,41.2Z" />
            <path class="cls-11" d="M146.6,41.2c.1,5.7-9.2,5.7-9.2,0S146.7,35.5,146.6,41.2Z" />
            <path class="cls-12" d="M137.4,41.2a3.5,3.5,0,0,0,.3,1.4,4.7,4.7,0,0,0,2.1.6,4.5,4.5,0,0,0,4.9-4.1,9.9,9.9,0,0,0-.2-1.7C141.6,35.6,137.3,37.8,137.4,41.2Z" />
            <path class="cls-6" d="M167.3,34.8c-8.5-.1-8.5,12.8,0,12.7S175.9,34.7,167.3,34.8Z" />
            <path class="cls-9" d="M173.3,41.2c.1,7.5-12.1,7.5-12,0S173.4,33.7,173.3,41.2Z" />
            <path class="cls-10" d="M172.7,41.2c.1,6.7-10.8,6.7-10.7,0S172.8,34.5,172.7,41.2Z" />
            <path class="cls-11" d="M171.9,41.2c.1,5.7-9.3,5.7-9.2,0S172,35.5,171.9,41.2Z" />
            <path class="cls-12" d="M162.7,41.2a3.5,3.5,0,0,0,.3,1.4,4.7,4.7,0,0,0,2,.6,4.5,4.5,0,0,0,5-4.1,5.1,5.1,0,0,0-.3-1.7C166.9,35.6,162.6,37.8,162.7,41.2Z" />
            <path
              class="cls-6"
              d="M247.7,62.1,224,61.8C205,95.7,169,96.5,158.1,98S38.4,101.9,27.3,99.1,6.7,87.3,4.3,85.2H3.2a.5.5,0,0,0-.2.4c4.7,8.1,13.4,18.8,13.4,18.8-2.3.7-7.4,4.8-3.5,6l6.2.2,47.3.3,123.6.5c7.9.1,14.5-.2,22.3,0,4.4-.1,1.8-3.9.3-6-.3-.5-2.5-2.3-2.5-2.8C210.9,90.1,234.7,71.4,247.7,62.1Z"
            />
            <path class="cls-5" d="M40.3,59.7c1.2-.2,10.2.8,6.7-1.5H40.3A.8.8,0,0,0,40.3,59.7Z" />
            <path class="cls-5" d="M50.8,59.7h1.6a.7.7,0,1,0,0-1.5H50.8A.8.8,0,0,0,50.8,59.7Z" />
            <path
              class="cls-5"
              d="M58.4,58.3H56.3a.8.8,0,1,0,.1,1.6H63c1.3.1,1.1-1.8-.1-1.6S62,60.8,64,59.5H84.7c2.3,1.5,2.3-2.3,0-.8H64c-2.1-1.3-2.4,1.4-.9,1.2s1-2.6-1.1-1.1H57.4c-2.2-1.4-2.5,1.4-.9,1.1h1.7a.8.8,0,1,0,.2-1.6Z"
            />
            <path class="cls-5" d="M174.1,70.7c1.9-3.5,6.9-5.7,10.8-5.6a.8.8,0,1,0,0-1.5c-4.5-.2-10.1,2.3-12.2,6.3a.8.8,0,0,0,1.4.8Z" />
            <path class="cls-5" d="M190.6,64.9a1.9,1.9,0,0,1,1.9-.3c1,.2,1.5-1.3.5-1.5a3.9,3.9,0,0,0-3.5.7c-.8.7.4,1.8,1.1,1.1Z" />
            <path class="cls-5" d="M199.2,64.7c1.3-.4,13.2,1,9.4-1.6h-9.4A.8.8,0,0,0,199.2,64.7Z" />
          </g>
        </symbol>
        <symbol id="air" data-name="air" viewBox="0 0 256 256">
          <rect id="air-3" data-name="air" class="cls-1" width="256" height="256" />
        </symbol>
      </defs>
      <use width="256" height="256" transform="translate(256)" xlink:href="#sea" />
      <use width="256" height="111.45" transform="translate(512 0)" xlink:href="#ship" />
      <use width="256" height="256" xlink:href="#air" />
    </svg>
    <div class="loading-action-inner">
      <div class="sea1">
        <svg>
          <use xlink:href="#sea" />
        </svg>
      </div>
      <div class="smogbox">
        <i class="smog smog-1"></i>
        <i class="smog smog-2"></i>
        <i class="smog smog-3"></i>
      </div>
      <div class="ship">
        <svg>
          <use xlink:href="#ship" />
        </svg>
      </div>
      <div class="sea2">
        <svg>
          <use xlink:href="#sea" />
        </svg>
      </div>
      <div class="air">
        <svg>
          <use xlink:href="#air" />
        </svg>
      </div>
    </div>
    <div class="loading-action-progress">
      <div class="loading-action-progress-inner clearfix"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="loading-action-text">正在获取登录信息,请耐心等待...</div>
  </div>
</template>

<style scoped>
.cls-1 {
  fill: url(#shade20);
}
.cls-2 {
  fill: url(#shade17);
}
.cls-3,
.cls-4 {
  fill: #0082c0;
}
.cls-4 {
  opacity: 0.5;
}
.cls-10,
.cls-4,
.cls-6 {
  mix-blend-mode: multiply;
}
.cls-5,
.cls-8 {
  fill: #ff282c;
}
.cls-6 {
  fill: #133b47;
  opacity: 0.3;
}
.cls-7 {
  fill: #fff;
}
.cls-12,
.cls-8 {
  mix-blend-mode: screen;
}
.cls-10,
.cls-9 {
  fill: #ffbe06;
}
.cls-11,
.cls-12 {
  fill: #00e2fd;
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(-3deg);
  }
  to {
    -moz-transform: rotate(3deg);
  }
}
@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(0);
  }

  to {
    -o-transform: rotate(-360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}

@-moz-keyframes ship

        /* Firefox */ {
  from {
    -moz-transform: rotate(-5deg) translate(5px, 3px);
  }

  to {
    -moz-transform: rotate(0) translate(-5px, -3px);
  }
}

@-webkit-keyframes ship

        /* Safari 和 Chrome */ {
  from {
    -webkit-transform: rotate(-5deg) translate(5px, 3px);
  }

  to {
    -webkit-transform: rotate(0) translate(-5px, -3px);
  }
}

@-o-keyframes ship

        /* Opera */ {
  from {
    -o-transform: rotate(-5deg) translate(5px, 3px);
  }

  to {
    -o-transform: rotate(0) translate(-5px, -3px);
  }
}

@keyframes ship {
  from {
    transform: rotate(-5deg) translate(5px, 3px);
  }

  to {
    transform: rotate(0) translate(-5px, -3px);
  }
}

@-moz-keyframes transform

        /* Firefox */ {
  from {
    -moz-transform: rotate(45deg) translateX(-12px);
  }

  to {
    -moz-transform: rotate(45deg) translateX(13px);
  }
}

@-webkit-keyframes transform

        /* Safari 和 Chrome */ {
  from {
    -webkit-transform: rotate(45deg) translateX(-12px);
  }

  to {
    -webkit-transform: rotate(45deg) translateX(13px);
  }
}

@-o-keyframes transform

        /* Opera */ {
  from {
    -o-transform: rotate(45deg) translateX(-12px);
  }

  to {
    -o-transform: rotate(45deg) translateX(13px);
  }
}

@keyframes transform {
  from {
    transform: rotate(45deg) translateX(-12px);
  }

  to {
    transform: rotate(45deg) translateX(13px);
  }
}

@-moz-keyframes smog

/* Firefox */ {
  from {
    -moz-transform: scale(1) translate(0, 0);
    opacity: 1;
  }

  to {
    -moz-transform: scale(3) translate(-25px, -15px);
    opacity: 0;
  }
}

@-webkit-keyframes smog
/* Safari 和 Chrome */ {
  from {
    -webkit-transform: scale(1) translate(0, 0);
    opacity: 1;
  }

  to {
    -webkit-transform: scale(3) translate(-25px, -15px);
    opacity: 0;
  }
}

@-o-keyframes smog {
  from {
    -o-transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  to {
    -o-transform: scale(3) translate(-25px, -15px);
    opacity: 0;
  }
}
@keyframes smog {
  from {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  to {
    transform: scale(3) translate(-25px, -15px);
    opacity: 0;
  }
}

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}

.clearfix:after {
  clear: both;
  overflow: hidden;
}

.clearfix {
  zoom: 1;
  /* for ie6 & ie7 */
}

#loading-action {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 256px;
  height: auto;
  margin: -168px 0 0 -128px;
}

#loading-action .loading-action-inner {
  position: relative;
  width: 256px;
  height: 256px;
  overflow: hidden;
  z-index: 1;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
}

#loading-action svg {
  width: 100%;
  height: 100%;
}

#loading-action .ship {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 180px;
  height: 84px;
  margin-left: -80px;
  margin-top: -34px;

  -webkit-transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
  transform: rotate(-3deg);

  animation: ship 1s linear 0s infinite alternate;
  /* Firefox: */
  -moz-animation: ship 1s linear 0s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: ship 1s linear 0s infinite alternate;
  /* Opera: */
  -o-animation: ship 1s linear 0s infinite alternate;
}

#loading-action .smogbox {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 10px;
  height: 10px;
  margin-left: -30px;
  margin-top: -44px;

  animation: ship 1s linear 0s infinite alternate;
  /* Firefox: */
  -moz-animation: ship 1s linear 0s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: ship 1s linear 0s infinite alternate;
  /* Opera: */
  -o-animation: ship 1s linear 0s infinite alternate;
}

#loading-action .smogbox .smog {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #e8e8e8;

  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;

  animation: smog 1s ease-in 0s infinite;
  /* Firefox: */
  -moz-animation: smog 1s ease-in 0s infinite;
  /* Safari 和 Chrome: */
  -webkit-animation: smog 1s ease-in 0s infinite;
  /* Opera: */
  -o-animation: smog 1s ease-in 0s infinite;
}

#loading-action .smogbox .smog.smog-1 {
  animation-delay: 0;
  -moz-animation-delay: 0;
  -webkit-animation-delay: 0;
  -o-animation-delay: 0;
}

#loading-action .smogbox .smog.smog-2 {
  animation-delay: 0.333s;
  -moz-animation-delay: 0.333s;
  -webkit-animation-delay: 0.333s;
  -o-animation-delay: 0.333s;
}

#loading-action .smogbox .smog.smog-3 {
  animation-delay: 0.666s;
  -moz-animation-delay: 0.666s;
  -webkit-animation-delay: 0.666s;
  -o-animation-delay: 0.666s;
}

#loading-action .sea1 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  width: 2048px;
  height: 2048px;
  margin-left: -1024px;
  margin-top: 36px;

  animation: rotate 60s linear 0s infinite;
  /* Firefox: */
  -moz-animation: rotate 60s linear 0s infinite;
  /* Safari 和 Chrome: */
  -webkit-animation: rotate 60s linear 0s infinite;
  /* Opera: */
  -o-animation: rotate 60s linear 0s infinite;
}

#loading-action .sea2 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 2048px;
  height: 2048px;
  margin-left: -1024px;
  margin-top: 36px;
  opacity: 0.5;

  animation: rotate 30s linear 0s infinite;
  /* Firefox: */
  -moz-animation: rotate 30s linear 0s infinite;
  /* Safari 和 Chrome: */
  -webkit-animation: rotate 30s linear 0s infinite;
  /* Opera: */
  -o-animation: rotate 30s linear 0s infinite;
}

#loading-action .air {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 256px;
  height: 256px;
}

#loading-action .loading-action-progress {
  position: relative;
  margin-left: 32px;
  margin-top: 30px;
  width: 192px;
  height: 6px;
  overflow: hidden;

  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
}

#loading-action .loading-action-progress-inner {
  position: relative;
  width: 256px;
  height: 6px;
  overflow: hidden;
  background-color: #c00000;

  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  border-radius: 3px;
}

#loading-action .loading-action-progress-inner i {
  float: left;
  margin-top: -32px;
  margin-right: 12px;
  height: 64px;
  width: 6px;
  background-color: #ff7f00;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);

  animation: transform 1s linear 0s infinite;
  /* Firefox: */
  -moz-animation: transform 1s linear 0s infinite;
  /* Safari 和 Chrome: */
  -webkit-animation: transform 1s linear 0s infinite;
  /* Opera: */
  -o-animation: transform 1s linear 0s infinite;
}

#loading-action .loading-action-text {
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #888888;
  text-align: center;
}
</style>
