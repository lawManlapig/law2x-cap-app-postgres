sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"law2xpeopleapp/test/integration/pages/PeopleNamesList",
	"law2xpeopleapp/test/integration/pages/PeopleNamesObjectPage"
], function (JourneyRunner, PeopleNamesList, PeopleNamesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('law2xpeopleapp') + '/test/flp.html#app-preview',
        pages: {
			onThePeopleNamesList: PeopleNamesList,
			onThePeopleNamesObjectPage: PeopleNamesObjectPage
        },
        async: true
    });

    return runner;
});

