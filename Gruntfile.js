module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilação LESS
        less: {
            dev: {
                files: {
                    'dev/css/style.css': 'src/less/style.less'
                }
            },
            dist: {
                options: { compress: true }, // Compressão ativada para produção
                files: {
                    'dist/css/style.min.css': 'src/less/style.less'
                }
            }
        },

        // Minificação JS
        uglify: {
            dev: {
                files: {
                    'dev/js/script.js': 'src/js/script.js'
                }
            },
            dist: {
                options: { compress: true, mangle: true }, // Compressão e "mangling" ativados
                files: {
                    'dist/js/script.min.js': 'src/js/script.js'
                }
            }
        },

        // Substituição nos arquivos
        replace: {
            prebuild: {
                options: {
                    patterns: [
                        { match: 'DESTINO_CSS', replacement: '@@DESTINO_CSS' },
                        { match: 'DESTINO_JS', replacement: '@@DESTINO_JS' }
                    ]
                },
                files: [
                    { src: 'src/html/index.html', dest: 'prebuild/index.html' }
                ]
            },
            dev: {
                options: {
                    patterns: [
                        { match: 'DESTINO_CSS', replacement: './css/style.css' },
                        { match: 'DESTINO_JS', replacement: './js/script.js' }
                    ]
                },
                files: [
                    { src: 'prebuild/index.html', dest: 'dev/index.html' }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        { match: 'DESTINO_CSS', replacement: './css/style.min.css' },
                        { match: 'DESTINO_JS', replacement: './js/script.min.js' }
                    ]
                },
                files: [
                    { src: 'prebuild/index.html', dest: 'dist/index.html' }
                ]
            }
        },

        // Limpar pasta prebuild
        clean: {
            prebuild: ['prebuild']
        },

        // Watch
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less:dev', 'replace:prebuild', 'replace:dev', 'clean:prebuild']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify:dev', 'replace:prebuild', 'replace:dev', 'clean:prebuild']
            },
            html: {
                files: ['src/html/index.html'],
                tasks: ['replace:prebuild', 'replace:dev', 'clean:prebuild']
            }
        }
    });

    // Carregar os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // rEGIstrando as tarefas
    grunt.registerTask('default', ['less:dev', 'uglify:dev', 'replace:prebuild', 'replace:dev', 'clean:prebuild', 'watch']);
    grunt.registerTask('build', ['less:dist', 'uglify:dist', 'replace:prebuild', 'replace:dist', 'clean:prebuild']);
};
