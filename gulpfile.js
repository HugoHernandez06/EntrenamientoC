const {src,dest,series} = require('gulp');
const sass = require('gulp-sass');  
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const image = require('gulp-image');
const destino = "../www";

sass.compiler = require('dart-sass');

function js() {
return src(['./js/main.js'])
.pipe(concat("main.min.js"))
.pipe(uglify())
.pipe(dest('./js'));
}



function css() {
// place code for your default task here
return src("./sass/**/*.scss")
.pipe(sass())
.pipe(cleanCSS())
.pipe(rename('main.min.css'))
.pipe(dest("./css"));
}

function images(){
	return src('./img/**/*')
	.pipe(image())
	.pipe(dest(`./${destino}/img`));
}

function mover_css(){
	return src('./css/**/*')
	.pipe(dest(`./${destino}/css`));
}

function mover_js(){
	return src('./js/**/*')
	.pipe(dest(`./${destino}/js`));
}

function mover_html(){
	return src('./html/index.html')
	.pipe(dest(`./${destino}`));
}

function mover_images(){
	return src('./img/**/*')
	.pipe(dest(`./${destino}/img`));
}

exports.css = css;
exports.js = js;
exports.images = images;
exports.release = series(css,js,images,mover_css,mover_js,mover_html);
exports.build = series(css,js,mover_css,mover_js,mover_html,mover_images);

exports.default = ()=>{};