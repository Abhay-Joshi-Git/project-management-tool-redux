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

});
