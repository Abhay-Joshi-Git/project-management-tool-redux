import issuesData from '../data/issues.json';

export const loadIssues = (offset, qty) => {
    return JSON.parse(issuesData).slice(offset, offset + qty);
}
