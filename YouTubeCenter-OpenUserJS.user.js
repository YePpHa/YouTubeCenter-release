/**
  The MIT License (MIT)

  Copyright (c) 2014 Jeppe Rune Mortensen

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
// ==UserScript==
// @id              YouTubeCenter
// @name            YouTube Center
// @namespace       http://www.facebook.com/YouTubeCenter
// @version         2.1.7
// @author          Jeppe Rune Mortensen <jepperm@gmail.com>
// @description     YouTube Center contains all kind of different useful functions which makes your visit on YouTube much more entertaining.
// @icon            https://raw.github.com/YePpHa/YouTubeCenter/master/assets/icon48.png
// @icon64          https://raw.github.com/YePpHa/YouTubeCenter/master/assets/icon64.png
// @domain          yeppha.github.io
// @domain          youtube.com
// @domain          www.youtube.com
// @domain          gdata.youtube.com
// @domain          apis.google.com
// @domain          plus.googleapis.com
// @domain          googleapis.com
// @domain          raw.github.com
// @domain          raw2.github.com
// @domain          raw.githubusercontent.com
// @domain          s.ytimg.com
// @match           http://www.youtube.com/*
// @match           https://www.youtube.com/*
// @match           http://youtube.com/*
// @match           https://youtube.com/*
// @match           https://yeppha.github.io/downloads/YouTubeCenter.meta.js
// @match           http://s.ytimg.com/yts/jsbin/*
// @match           https://s.ytimg.com/yts/jsbin/*
// @match           https://raw.github.com/YePpHa/YouTubeCenter/master/*
// @match           https://raw.githubusercontent.com/YePpHa/YouTubeCenter/master/*
// @match           http://raw.github.com/YePpHa/YouTubeCenter/master/*
// @match           http://raw.githubusercontent.com/YePpHa/YouTubeCenter/master/*
// @match           http://apis.google.com/*/widget/render/comments?*
// @match           https://apis.google.com/*/widget/render/comments?*
// @match           http://plus.googleapis.com/*/widget/render/comments?*
// @match           https://plus.googleapis.com/*/widget/render/comments?*
// @include         http://www.youtube.com/*
// @include         https://www.youtube.com/*
// @include         http://youtube.com/*
// @include         https://youtube.com/*
// @include         http://apis.google.com/*/widget/render/comments?*
// @include         https://apis.google.com/*/widget/render/comments?*
// @include         http://plus.googleapis.com/*/widget/render/comments?*
// @include         https://plus.googleapis.com/*/widget/render/comments?*
// @exclude         http://apiblog.youtube.com/*
// @exclude         https://apiblog.youtube.com/*
// @exclude         http://*.youtube.com/subscribe_embed?*
// @exclude         https://*.youtube.com/subscribe_embed?*
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// @grant           GM_log
// @grant           GM_registerMenuCommand
// @grant           unsafeWindow
// @updateURL       https://yeppha.github.io/downloads/YouTubeCenter.meta.js
// @downloadURL     https://yeppha.github.io/downloads/YouTubeCenter.user.js
// @updateVersion   156
// @run-at          document-start
// @priority        9001
// @contributionURL https://github.com/YePpHa/YouTubeCenter/wiki/Donate
// @require         https://yeppha.github.io/downloads/YouTubeCenter.min.user.js
// ==/UserScript==

// The source code of YouTube Center can be found at https://github.com/YePpHa/YouTubeCenter/