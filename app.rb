require 'rubygems'
require 'sinatra'
require 'haml'

# Helpers
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, {:format => :html5} # default Haml format is :xhtml

# Application routes
get '/' do
  haml :'styleguide/index', :layout => :'layouts/application'
end

get '/exo' do
	haml :'styleguide/typography/exo', :layout => :'layouts/application'
end

get '/source_sans' do
	haml :'styleguide/typography/source_sans', :layout => :'layouts/application'
end

get '/background_tool' do
  haml :'background_tool/index', :layout => :'layouts/application'
end