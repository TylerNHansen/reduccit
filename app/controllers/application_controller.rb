class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  helper_method :current_user, :form_auth_html, :update_method_html

  def splash

  end


  def current_user
    @current_user ||= User.find_or_create(session[:token])
    session[:token] = @current_user.token
    @current_user
  end

  def form_auth_html
    "<input type='hidden' name='authenticity_token' value='#{form_authenticity_token}'>".html_safe
  end

  def update_method_html
    "<input type='hidden' name='_method' value='patch'>".html_safe
  end


end
