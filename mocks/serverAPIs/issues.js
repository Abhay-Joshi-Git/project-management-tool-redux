import issuesData from '../data/issues.json';

var issues = [...issuesData.issues];
const originalDataLen = issuesData.issues.length;

export const loadIssues = (offset, qty) => {
    let totalQtyReq = offset + qty;
    let totalQtyAvailable = issues.length;

    if (totalQtyReq <= totalQtyAvailable) {
        return issues.slice(offset, offset + qty);
    }

    let numIssuesToBeAdded = totalQtyReq - totalQtyAvailable;

    let numOfTimes = Math.floor(numIssuesToBeAdded / originalDataLen);
    let remainder = numIssuesToBeAdded % originalDataLen;
    let newData = [];

    for (let i = 0; i < numOfTimes; i ++) {
        newData = [...newData, ...issuesData.issues]
    }

    newData = [...newData, ...issuesData.issues.slice(0, remainder)];

    let availableStories = issues.filter(item => { return item.type === 'story' });
    let availableBugs = issues.filter(item => { return item.type === 'bug' });

    let storyCount = availableStories.length;
    let bugCount = availableBugs.length;

    newData = newData.map((item, index) => {
        let currItem = {...item};
        if (item.type === 'story') {
            currItem.id = 'S' + ++storyCount;
        } else if (item.type === 'bug') {
            currItem.id = 'B' + ++bugCount
        }
        return currItem;
    });

    issues = [...issues, ...newData];

    return issues.slice(offset, offset + qty)
}
