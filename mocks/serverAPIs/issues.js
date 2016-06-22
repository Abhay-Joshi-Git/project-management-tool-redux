import issuesData from '../data/issues.json';

export const loadIssues = (offset, qty) => {
    return issuesData.issues.slice(offset, offset + qty);
}
