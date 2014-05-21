class PostsController < ApplicationController
  def index
    @posts = Post.last(20)
  end


  def new

  end

  def create

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

  def link_params
    params.require(:link).permit(:user_id, :title, :target, :content)
  end
end
