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

const getRelativeDirPath = (aPath, from, dir) => {
  const absoluteDir = dir ? aPath.toString() : path.parse(aPath).dir;
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
  console.log(data);
  return mapToNetlifyFields(data.attributes);
}

const walk = (file, context) => {
  const filePath = path.join(context, file);
  console.log(file);
  if (file === INDEX) {
    console.log('happenning')
    const baseDir = path.basename(context);

    if (baseDir === CONTENT_DIR) {
      config.collections.push({
        name: 'homepage',
        label: 'Home Page',
        folder: CONTENT_DIR,
        create: false,
        fields: prepareForNetlify(filePath),
      });
    } else {
      config.collections[config.collections.length - 1] = {
        name: baseDir,
        label: `${capitalize(baseDir)} Page`,
        folder: baseDir === CONTENT_DIR ? CONTENT_DIR : getRelativeDirPath(filePath, CONTENT_DIR),
        create: false,
        fields: prepareForNetlify(filePath),
      }
    }
  } else if (isDirectory(filePath)) {
    if (file !== 'assets') {
      if (file !== CONTENT_DIR) {
        config.collections.push({
          name: file,
          label: capitalize(file),
          folder: getRelativeDirPath(filePath, CONTENT_DIR, true),
          create: true,
        });
      }
      fs.readdirSync(filePath)
      .forEach(f => walk(f, filePath));
    }
  } else { // then it is just a record
    let lastCollection = config.collections[config.collections.length - 1];
    console.log(!lastCollection.fields);
    if (!lastCollection.fields) {
      lastCollection.fields = prepareForNetlify(filePath);
    }
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
