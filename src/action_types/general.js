// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import keyMirror from 'utils/key_mirror';

export default keyMirror({
    RECEIVED_APP_STATE: null,
    RECEIVED_APP_CREDENTIALS: null,
    REMOVED_APP_CREDENTIALS: null,
    RECEIVED_APP_DEVICE_TOKEN: null,

    PING_REQUEST: null,
    PING_SUCCESS: null,
    PING_FAILURE: null,
    PING_RESET: null,

    RECEIVED_SERVER_VERSION: null,

    CLIENT_CONFIG_REQUEST: null,
    CLIENT_CONFIG_SUCCESS: null,
    CLIENT_CONFIG_FAILURE: null,
    CLIENT_CONFIG_RECEIVED: null,

    CLIENT_LICENSE_REQUEST: null,
    CLIENT_LICENSE_SUCCESS: null,
    CLIENT_LICENSE_FAILURE: null,
    CLIENT_LICENSE_RECEIVED: null,

    LOG_CLIENT_ERROR_REQUEST: null,
    LOG_CLIENT_ERROR_SUCCESS: null,
    LOG_CLIENT_ERROR_FAILURE: null,

    WEBSOCKET_REQUEST: null,
    WEBSOCKET_SUCCESS: null,
    WEBSOCKET_FAILURE: null,
    WEBSOCKET_CLOSED: null
});
