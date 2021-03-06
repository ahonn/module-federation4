
const path = require('path');
const fs = require('fs');
const tmpdir = path.join(__dirname, '.tmp');

const project1dir = path.join(tmpdir, './project1/dist/');
const project2dir = path.join(tmpdir, './project2/dist/');

require('./build');

describe('Build', () => {
    test('should bundle', () => {
        expect(fs.existsSync(path.join(project1dir, './main.js'))).toBeTruthy();
        expect(fs.existsSync(path.join(project2dir, './main.js'))).toBeTruthy();
    });

    test('should have remoteEntry', () => {
        expect(fs.existsSync(path.join(project1dir, './remoteEntry.js'))).toBeTruthy();
        expect(fs.existsSync(path.join(project2dir, './remoteEntry.js'))).toBeTruthy();
    });
});

