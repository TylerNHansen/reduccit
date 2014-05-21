class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  helper_method :current_user

  def splash

  end


  def current_user
    @current_user ||= User.find_or_create(session[:token])
    session[:token] = @current_user.token
    @current_user
  end


end
