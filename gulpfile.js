const gulp = require('gulp');
const umd = require('gulp-umd');
const util = require('gulp-util');
const babel = require('gulp-babel');
const sourceFilePathArray = require('./config/config-read-file');
const tsc = require('gulp-tsc');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

const entryDir = 'src';
const outputDir = 'lib';

const fileList = sourceFilePathArray(entryDir);

// base 父层级 编译时依次从父层级下开始编译 并创建对应层级的同名文件夹和文件
const excludeSpecifiedPaths = {'base': entryDir};

gulp.task('compress', function() {
    gulp.src(_js_filePathArray, excludeSpecifiedPaths)
    gulp.src(_js_filePathArray)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(outputDir));
});


gulp.task('compress', ['compressTs', 'compressEs', 'dist']);

gulp.task('watch', function(){
    const listenerDir = `${entryDir}/**`;
    gulp.watch(listenerDir, ['compress']).on('change', function(event) {
        const filePathSplitArray = event.path.split('/');
        const fileName = filePathSplitArray[filePathSplitArray.length-1];
        util.log('文件[' + util.colors.blue.bold(fileName) + ']' + event.type);
    });

});
