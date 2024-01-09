"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubUserGistsGetNode = exports.githubUserFollowingGetNode = exports.githubUserFollowersGetNode = exports.githubUserGetNode = void 0;
/**
 * Related to GitHub user.
 */
var getNode_1 = require("./getNode");
Object.defineProperty(exports, "githubUserGetNode", { enumerable: true, get: function () { return getNode_1.githubUserGetNode; } });
var followersGetNode_1 = require("./followersGetNode");
Object.defineProperty(exports, "githubUserFollowersGetNode", { enumerable: true, get: function () { return followersGetNode_1.githubUserFollowersGetNode; } });
var followingGetNode_1 = require("./followingGetNode");
Object.defineProperty(exports, "githubUserFollowingGetNode", { enumerable: true, get: function () { return followingGetNode_1.githubUserFollowingGetNode; } });
var gistsGetNode_1 = require("./gistsGetNode");
Object.defineProperty(exports, "githubUserGistsGetNode", { enumerable: true, get: function () { return gistsGetNode_1.githubUserGistsGetNode; } });
