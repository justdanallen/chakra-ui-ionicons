import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'svg-parser';
import { changeCase } from './change-case';
import { createTag, getChildContent, getViewBox } from './svg-helpers';
import * as Handlebars from 'handlebars';

const iconTemplate = Handlebars.compile(
  fs.readFileSync(path.join(__dirname, 'icon-template.hbs'), 'utf-8')
);

const ICON_DIR = '../ionicons';
const SRC_ICON_DIR = '../src/icons';
const SRC_ICON_INDEX = path.join(__dirname, '../src/icons/index.ts');

if (fs.existsSync(SRC_ICON_INDEX)) {
  fs.unlinkSync(SRC_ICON_INDEX);
}

fs.readdir(path.join(__dirname, ICON_DIR), (err, files) => {
  if (err) console.error("Could't read the directory");

  files.forEach(file => {
    const icon = fs.readFileSync(path.join(__dirname, ICON_DIR, file), {
      encoding: 'utf-8',
    });
    const iconObj = parse(icon);

    const fileName = file.split('.')[0];
    const componentName = changeCase(fileName, {
      input: 'kebab-case',
      output: 'PascalCase',
    });
    const componentFile = `${fileName}.tsx`;

    const viewBox = getViewBox(iconObj);

    const childContent = getChildContent(iconObj);
    const tags = childContent.map(child =>
      createTag(child.tagName, child.properties)
    );

    const data = {
      viewBox,
      componentName,
      tags,
    };

    fs.writeFileSync(
      path.join(__dirname, SRC_ICON_DIR, componentFile),
      iconTemplate(data)
    );

    fs.appendFileSync(SRC_ICON_INDEX, `export * from './${fileName}';\n`);
  });
});
