JEKYLL_SERVE = "bundle exec jekyll serve --livereload --config _config.yml,_config_dev.yml"

desc "Serve site locally at http://localhost:4000 (livereload, dev baseurl)"
task :serve do
  sh JEKYLL_SERVE
end

desc "Build for production (GitHub Pages paths)"
task :build do
  sh "bundle exec jekyll build"
end