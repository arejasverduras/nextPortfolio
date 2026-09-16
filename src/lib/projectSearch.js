const projects = require('../content/project-search-index.json');
const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const compact = value => normalize(value).replace(/\s/g, '');
const indexed = projects.map(project => ({
    ...project,
    names: [project.title, project.slug, ...project.keywords].map(normalize),
    technologies: project.tech.map(normalize),
}));
function matchProjects(input) {
    const query = normalize(input.replace(/^\s*search(?:\s+|$)/i, ''));
    if (!query) return [];
    const exact = indexed.filter(project => project.names.some(name => name === query || compact(name) === compact(query)));
    const matches = exact.length ? exact : indexed.filter(project => {
        const nameMatch = query.length >= 2 && project.names.some(name => name.includes(query) || compact(name).includes(compact(query)) || query.split(' ').every(word => name.includes(word)));
        const techMatch = project.technologies.some(tech => tech === query || compact(tech) === compact(query) || (query.length >= 2 && tech.split(' ').some(word => word.startsWith(query))));
        return nameMatch || techMatch;
    });
    return matches.map(({title, slug}) => ({title, href: `/projects/${slug}`}));
}
module.exports = { matchProjects };
