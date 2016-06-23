import expect from 'expect';
import * as issues from '../modules/issues.js';
import immutable from 'immutable';

var state = immutable.List([]);

describe('testing issues reducer', function() {

    it('should load data on LOAD action', () => {
        var action = {
            type: 'LOAD',
            payLoad: {
                offset: 0,
                qty: 3
            }
        }
        var actual = issues.reducer(state, action);
        const expectedJSON = `{
            "issues" : [
                {
                    "id": "S1",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 1,
                    "summary": "Create static data for issues which should contain some test data that should be also realistic and long enough",
                    "description": "This story is regarding creating static data, it will be used till server starts sending the data, so that UI can be tested with real deal"
                },
                {
                    "id": "S2",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 2,
                    "summary": "Create reducer for issues which should manage actions related to issues like loading the data, loading more, etc",
                    "description": "This story is regarding Create reducer for issues which should manage actions related to issues like loading the data, loading more data on scroll, addting  data, ALL CRUD"
                },
                {
                    "id": "S3",
                    "type": "story",
                    "priority": "high",
                    "estimation": 2,
                    "summary": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well",
                    "description": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well and also it should cover every action"
                }
            ]
        }`;
        var immutableData = JSON.parse(expectedJSON).issues.map(item => {return immutable.Map(item)});
        var expected = immutable.List(immutableData);
        expect(actual).toEqual(expected);
    })


    it('should load dynamic data on LOAD action if data for that offset is not available', () => {
        var action = {
            type: 'LOAD',
            payLoad: {
                offset: 40,
                qty: 5
            }
        }
        var actual = issues.reducer(state, action);
        const expectedJSON = `{
            "issues" : [
                {
                    "id": "S33",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 1,
                    "summary": "Create static data for issues which should contain some test data that should be also realistic and long enough",
                    "description": "This story is regarding creating static data, it will be used till server starts sending the data, so that UI can be tested with real deal"
                },
                {
                    "id": "S34",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 2,
                    "summary": "Create reducer for issues which should manage actions related to issues like loading the data, loading more, etc",
                    "description": "This story is regarding Create reducer for issues which should manage actions related to issues like loading the data, loading more data on scroll, addting  data, ALL CRUD"
                },
                {
                    "id": "S35",
                    "type": "story",
                    "priority": "high",
                    "estimation": 2,
                    "summary": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well",
                    "description": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well and also it should cover every action"
                },
                {
                    "id": "B9",
                    "type": "bug",
                    "priority": "medium",
                    "estimation": 2,
                    "summary": "sample bug related to issue reducer",
                    "description": "bug may depend on some story or some other bug, etc. See there can links assocaite with it. try to tackle that."
                },
                {
                    "id": "S36",
                    "type": "story",
                    "priority": "low",
                    "estimation": 3,
                    "summary": "Create edit screen for an issue. The screen would allow user to add the data for an issue. It also validates that in some manner.",
                    "description": "Create edit screen for an issue. The screen would allow user to add the data for an issue. It also validates that in some manner. This screen will be also used for editing purposes as well"
                }
            ]
        }`;
        var immutableData = JSON.parse(expectedJSON).issues.map(item => {return immutable.Map(item)});
        var expected = immutable.List(immutableData);
        expect(actual).toEqual(expected);
    })

    it('should load dynamic data on LOAD action if data for that offset is not available', () => {
        var action = {
            type: 'LOAD',
            payLoad: {
                offset: 0,
                qty: 6
            }
        }
        var actual = issues.reducer(state, action);
        const expectedJSON = `{
            "issues" : [
                {
                    "id": "S1",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 1,
                    "summary": "Create static data for issues which should contain some test data that should be also realistic and long enough",
                    "description": "This story is regarding creating static data, it will be used till server starts sending the data, so that UI can be tested with real deal"
                },
                {
                    "id": "S2",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 2,
                    "summary": "Create reducer for issues which should manage actions related to issues like loading the data, loading more, etc",
                    "description": "This story is regarding Create reducer for issues which should manage actions related to issues like loading the data, loading more data on scroll, addting  data, ALL CRUD"
                },
                {
                    "id": "S3",
                    "type": "story",
                    "priority": "high",
                    "estimation": 2,
                    "summary": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well",
                    "description": "Create action creators for issues which should allow view to create and dispatch actions, those should be exported as well and also it should cover every action"
                },
                {
                    "id": "B1",
                    "type": "bug",
                    "priority": "medium",
                    "estimation": 2,
                    "summary": "sample bug related to issue reducer",
                    "description": "bug may depend on some story or some other bug, etc. See there can links assocaite with it. try to tackle that."
                },
                {
                    "id": "S4",
                    "type": "story",
                    "priority": "low",
                    "estimation": 3,
                    "summary": "Create edit screen for an issue. The screen would allow user to add the data for an issue. It also validates that in some manner.",
                    "description": "Create edit screen for an issue. The screen would allow user to add the data for an issue. It also validates that in some manner. This screen will be also used for editing purposes as well"
                },
                {
                    "id": "S5",
                    "type": "story",
                    "priority": "highest",
                    "estimation": 1,
                    "summary": "Create static data for issues which should contain some test data that should be also realistic and long enough",
                    "description": "This story is regarding creating static data, it will be used till server starts sending the data, so that UI can be tested with real deal"
                }
            ]
        }`;
        var immutableData = JSON.parse(expectedJSON).issues.map(item => {return immutable.Map(item)});
        var expected = immutable.List(immutableData);
        expect(actual).toEqual(expected);
    })


});
