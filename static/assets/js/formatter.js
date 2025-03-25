function fromFile(content) {
    // Note that I removed the options object. If stuff breaks maybe add it back
    const result = matter.matter(content, {});
    // in the absent of a body when serializing an entry we use an empty one
    // when calling `toFile`, so we don't want to add it when parsing.
    return {
        ...result.data,
        ...(result.content.trim() && { body: liquidLinksToNormal(result.content) }),
    };
}

function toFile(data) {
    const { body = '', ...meta } = data;

    // gray-matter always adds a line break at the end which trips our
    // change detection logic
    // https://github.com/jonschlinkert/gray-matter/issues/96
    // Note that I removed the options object from the stringify call. If stuff breaks maybe add it back
    const trimLastLineBreak = body.slice(-1) !== '\n';
    const file = matter.stringify(normalLinksToLiquid(body), meta, {});
    return trimLastLineBreak && file.slice(-1) === '\n' ? file.slice(0, -1) : file;
}

// Converts liquid link tags to normal links so decap can handle them
function liquidLinksToNormal(content)
{
    return content.replace(/{%link (.*?) %}/g, '/persona-modding-docs/$1');
}

// Converts normal relative links to liquid link tabs
function normalLinksToLiquid(content)
{
    return content.replace(/\]\((?:\/persona-modding-docs)?\/(assets\/images.*)\)/g, ']({%link $1 %})')
}

CMS.registerCustomFormat('jekyll', 'md', {
    fromFile: text => fromFile(text),
    toFile: value => toFile(value),
});
