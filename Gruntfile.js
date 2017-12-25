module.exports = function (grunt) {

	// Load all packages.
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				outputStyle: 'expanded',
				sourceMap: true,
				includePaths: [
					'node_modules/bourbon/app/assets/stylesheets',
					'node_modules/sanitize.scss'
				]
			},
			dist: {
				files: {
					'src/assets/main.css': 'src/assets/sass/main.scss'
				}
			}
		},
		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({ browsers: 'last 2 versions' }), // Add vendor prefixes.
					require('css-mqpacker')({ sort: true })
				]
			},
			dist: {
				src: '*.css'
			}
		},
		stylelint: {
			options: {
				configFile: '.stylelintrc',
				failOnError: true,
				syntax: 'scss'
			},
			src: [
				'src/assets/sass/**/.scss'
			]
		},
		cssmin: {
			target: {
				files: [
					{
						src: ['src/assets/*.css', '!*.min.css'],
						dest: 'dist/style.min.css',
						ext: '.min.css'
					}
				]
			}
		},
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'src/assets/scripts/app.js': 'src/assets/scripts/app.js'
				}
			}
		},
		concat: {
			options: {
				banner:
					'/*! <%= pkg.name %> JS - This file is built with Grunt. DO NOT EDIT! */\n\n',
				separator: '\n\n',
				sourceMap: true
			},
			dist: {
				src: ['src/assets/scripts/src/*.js'],
				dest: 'src/assets/app.js'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/app.min.js': 'assets/app.js'
				}
			}
		},
		eslint: {
			options: {
				configFile: '.eslintrc.js'
			},
			target: ['assets/scripts/**/*.js']
		},
		imagemin: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'src/assets/',
						src: ['images/*.{png,jpg,gif}'],
						dest: 'dist/images',
						flatten: true
					}
				]
			}
		},
		watch: {
			css: {
				files: ['src/assets/sass/**/*.scss'],
				tasks: ['styles'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['src/assets/scripts/**/*.js'],
				tasks: ['scripts'],
				options: {
					livereload: true
				}
			},
			sprites: {
				files: ['src/assets/icons/*.svg'],
				tasks: ['svgmin', 'svgstore'],
				options: {
					livereload: true
				}
			}
		},
		svgmin: {
			options: {
				plugins: [{ removeViewBox: false }]
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'src/assets/',
						src: ['icons/*.svg'],
						dest: 'src/',
						flatten: true
					}
				]
			}
		},
		svgstore: {
			dist: {
				files: {
					'src/svg-defs.svg': ['assets/icons/svg/*.svg']
				}
			},
			options: {
				cleanup: true
			}
		},
		jasmine: {
			all: {
				src: ['src/assets/scripts/**/*.js'],
				options: {
					specs: ['spec/**/*Spec.js']
				}
			}
		},
		version: {
			src: ['package.json', 'src/index.html'],
			options: {
				prefix: '[\\?]?version[\\\'"]?[=:]\\s*[\\\'"]?'
			}
		},
		exec: {
			add: 'git add .',
			commit: {
				/**
				 * Creates the commit message.
				 *
				 * @returns {string} The commit message.
				 */
				cmd: function () {

					var oldPkg = this.config('pkg'),
						pkg = grunt.file.readJSON('package.json'),
						cmd =
							'git commit -am "Updating from ' +
							oldPkg.version +
							' to ' +
							pkg.version +
							'"';
					return cmd;

				}
			},
			push: 'git push'
		}
	});

	// Configure tasks.
	grunt.registerTask('default', function () {

		console.log('Please choose from a configured task.');

	});

	grunt.registerTask('styles', ['sasslint', 'sass', 'postcss']);

	grunt.registerTask('scripts', ['concat', 'eslint', 'babel']);

	grunt.registerTask('icons', ['svgmin', 'svgstore']);

	grunt.registerTask('lint', ['lint5', 'sasslint', 'eslint']);

	grunt.registerTask('minify', function (full) {

		if (full) {

			grunt.task.run(['cssmin', 'uglify', 'icons', 'imagemin']);

		} else {

			grunt.task.run(['cssmin', 'uglify', 'icons']);

		}

	});

	grunt.registerTask('build', ['styles', 'scripts', 'icons', 'minify:full']);

	grunt.registerTask('deploy', function (releaseType) {

		if (!releaseType) {

			releaseType = 'patch';

		}

		grunt.task.run([
			'build',
			'version::' + releaseType,
			'exec:add',
			'exec:commit',
			'exec:push'
		]);

	});

};
