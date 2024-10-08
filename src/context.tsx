import * as H from 'history';
import { match } from 'react-router';

import { NotificationsApi } from './components/notifications/notification-manager';
import { PopupApi } from './components/popup/popup-manager';

export interface AppContext {
    router: {
        history: H.History;
        route: {
            location: H.Location;
            match: match<any>;
        };
    };
    apis: {
        popup: PopupApi;
        notifications: NotificationsApi;
    };
    history: H.History;
}
