// ==UserScript==
// @name                NGA Redirector
// @name:en-US          NGA Redirector
// @name:zh-CN          NGA 重定向
// @description         Automatically redirect NGA domains to bbs.nga.cn
// @description:en-US   Automatically redirect NGA domains to bbs.nga.cn
// @description:zh-CN   自动重定向 NGA 域名到 bbs.nga.cn
// @namespace           nga-redirector
// @version             2021.12.09
// @author              Akatsuki Rui
// @license             MIT License
// @run-at              document-start
// @match               *://nga.178.com/*
// @match               *://ngabbs.com/*
// @match               *://ngacn.cc/*
// @match               *://yues.org/*
// ==/UserScript==

"use strict";

window.location.replace(location.href.replace(location.hostname, "bbs.nga.cn"));
