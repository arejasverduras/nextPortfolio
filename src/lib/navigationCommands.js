const aliases = {
    start: 'home',
    index: 'home',
    bio: 'about',
    'about me': 'about',
    whoami: 'about',
    work: 'projects',
    apps: 'projects',
    'my projects': 'projects',
    code: 'projects',
    articles: 'blog',
    posts: 'blog',
    writing: 'blog',
    updates: 'blog',
    menu: 'help',
    commands: 'help',
    '?': 'help',
    'what to do': 'help',
};

export function normalizeNavigationCommand(value) {
    const command = value.toLowerCase().trim().replace(/\s+/g, ' ')
        .replace(/^(?:go to|open)\s+/, '');
    return Object.prototype.hasOwnProperty.call(aliases, command) ? aliases[command] : command;
}
