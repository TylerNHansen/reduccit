class PostsController < ApplicationController
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

  def show
    @post = Post.find(params[:id])
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :body)
  end
end
