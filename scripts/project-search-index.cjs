const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');
const directory = path.resolve(__dirname, '../src/content/projects');
const output = path.resolve(__dirname, '../src/content/project-search-index.json');
function generateIndex() {
    const projects = fs.readdirSync(directory).filter(file => file.endsWith('.md')).sort().map(file => {
        const { data } = matter(fs.readFileSync(path.join(directory, file), 'utf8'));
        return { title: data.title, slug: file.slice(0, -3), tech: data.tech || [], keywords: data.searchKeywords || [] };
    });
    const json = JSON.stringify(projects, null, 2) + '\n';
    if (!fs.existsSync(output) || fs.readFileSync(output, 'utf8') !== json) fs.writeFileSync(output, json);
}
class ProjectSearchIndexPlugin {
    apply(compiler) {
        compiler.hooks.beforeCompile.tap('ProjectSearchIndex', generateIndex);
        compiler.hooks.afterCompile.tap('ProjectSearchIndex', compilation => {
            compilation.contextDependencies.add(directory);
            for (const file of fs.readdirSync(directory).filter(file => file.endsWith('.md'))) {
                compilation.fileDependencies.add(path.join(directory, file));
            }
        });
    }
}
module.exports = { generateIndex, ProjectSearchIndexPlugin };
if (require.main === module) generateIndex();
