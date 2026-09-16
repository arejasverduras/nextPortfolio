const { test } = require('node:test');
const assert = require('node:assert/strict');
require('./project-search-index.cjs').generateIndex();
const { matchProjects } = require('../src/lib/projectSearch');
const projects = require('../src/content/project-search-index.json');
test('names, keywords, spacing and explicit search', () => {
 for (const query of ['drc', 'recovery', 'search recovery', 'BRAIN INJURY']) assert.equal(matchProjects(query)[0].href, '/projects/daily-recovery-coach');
 assert.equal(matchProjects('my power')[0].href, '/projects/mypower');
 for (const project of projects) assert.equal(matchProjects(project.slug)[0].href, '/projects/' + project.slug);
});
test('technology returns all listed matches without full-text false positives', () => {
 const expected = projects.filter(p => p.tech.includes('React')).map(p => '/projects/' + p.slug);
 assert.deepEqual(matchProjects('react').map(p => p.href), expected);
 assert.deepEqual(matchProjects('search react'), matchProjects('react'));
 assert.ok(matchProjects('nextjs').length > 0);
});
test('ambiguity, exact-name priority and missing input', () => {
 assert.equal(matchProjects('koek').length, 2);
 assert.equal(matchProjects('koekboek').length, 1);
 for (const query of ['', 'search', '   ', 'unfindable', 'x']) assert.deepEqual(matchProjects(query), []);
});
