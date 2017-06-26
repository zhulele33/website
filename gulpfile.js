//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    notify = require('gulp-notify');
    // cache = require('gulp-cache'),
/*    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');*/
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});
gulp.task('testHtmlmin1', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('views/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/views'));
});


/*gulp.task('images', function() {
return gulp.src(['img/*','views/images/*'])
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true,multipass: true,svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()] }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});*/
gulp.task('minifycss', function() {
    return gulp.src('css/*.css')      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist/css'));  //输出文件夹
});
gulp.task('viewscss', function() {
    return gulp.src('views/css/*.css')      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('dist/views/css'));  //输出文件夹
});
gulp.task('minifyjs', function() {
    return gulp.src('js/*.js')
/*        .pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名*/
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'));  //输出
});

gulp.task('viewsminifyjs', function() {
    return gulp.src('views/js/*.js')/*
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('dist/views/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名*/
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/views/js'));  //输出
});
gulp.task('default',['minifycss','viewscss','minifyjs','viewsminifyjs','testHtmlmin','testHtmlmin1']); 