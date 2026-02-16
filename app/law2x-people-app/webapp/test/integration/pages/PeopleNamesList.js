sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'law2xpeopleapp',
            componentId: 'PeopleNamesList',
            contextPath: '/PeopleNames'
        },
        CustomPageDefinitions
    );
});