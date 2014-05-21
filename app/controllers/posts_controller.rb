class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.last(20)
  end


  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = self.current_user
    if @post.save
      redirect_to posts_url
    else
      fail # replace with error handling later
    end
  end

  # defaults
  def show
  end

  # also defaults
  def edit

  end

  def update
    if @post.update(post_params)
      redirect_to posts_url
    else
      fail # TODO: error handling
    end
  end

  def destroy
    @post.destroy
    redirect_to posts_url
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end


  def post_params
    params.require(:post).permit(:title, :url, :body)
  end
end
