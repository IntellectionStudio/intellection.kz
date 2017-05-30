const fs = require('fs');
const path = require('path');
const fm = require('front-matter');
const yaml = require('yamljs');

const INDEX = 'index.md';
const CONTENT_DIR = 'content';
const CONTEXT_DIR = path.join(__dirname, '..');
const CONTENT_DIR_PATH = path.join(CONTEXT_DIR, CONTENT_DIR);
const CONFIG_FILE_PATH = path.join(CONTEXT_DIR, 'admin', 'config.yml');

let config = {
  backend: {
    name: 'github',
    repo: 'IntellectionStudio/intellection.kz',
    branch: 'master',
  },

  publish_mode: 'editorial_workflow',
  public_folder: 'content',
  media_folder: 'content/assets',

  collections: [],
};

// UTILS
const capitalize = w => w[0].toUpperCase() + w.slice(1);

const isDirectory = filePath => {
  return fs.lstatSync(filePath).isDirectory();
}

const getRelativeDirPath = (aPath, from) => {
  const absoluteDir = path.parse(aPath).dir;
  const contentDirIndex = absoluteDir.indexOf(CONTENT_DIR);
  const relativeDir = absoluteDir.substr(contentDirIndex, absoluteDir.length);
  return relativeDir;
}

const rewriteFile = (filePath, contents) => {

}

// LOGIC
const mapToNetlifyFields = (value, key, result = []) => {
  if (typeof value === 'string') {
    result.push({
      label: key,
      name: key,
      widget: value.length > 72 ? 'text' : 'string',
    });
  } else if (typeof value === 'object' && key) { // not initial object
    result.push({
      label: key,
      name: key,
      widget: 'object',
      fields: Object.entries(value).map(([k, v]) => {
        return mapToNetlifyFields(v, k, []);
      }),
    });
  } else if (typeof value === 'object' && !key) {
    Object.entries(value).forEach(([k, v]) => {
      mapToNetlifyFields(v, k, result);
    });
  }
  return result;
};

const prepareForNetlify = (filePath) => {
  const contents = fs.readFileSync(filePath, 'utf-8');
  const data = fm(contents);
  // data.attributes.body = data.body;
  console.log(mapToNetlifyFields(data.attributes));
  return mapToNetlifyFields(data.attributes);
}

const walk = (file, context) => {
  const filePath = path.join(context, file);
  if (file === INDEX) {
    const baseDir = path.basename(context);

    config.collections.push({
      name: baseDir === CONTENT_DIR ? 'homepage' : baseDir,
      label: baseDir === CONTENT_DIR ? 'Home Page' : `${capitalize(baseDir)} Page`,
      folder: baseDir === CONTENT_DIR ? CONTENT_DIR : getRelativeDirPath(filePath, CONTENT_DIR),
      create: false,
      fields: prepareForNetlify(filePath),
    });
  } else if (isDirectory(filePath)) {
    fs.readdirSync(filePath).forEach(file => walk(file, filePath));
  } else { // then it is just a record

  }
}

walk(CONTENT_DIR, CONTEXT_DIR);

fs.truncate(CONFIG_FILE_PATH, 0, () => {
  fs.writeFile(CONFIG_FILE_PATH, yaml.stringify(config), (err) => {
    if (err) {
      return console.err("Error writing file: " + err);
    }
    console.log('done');
  });
});
