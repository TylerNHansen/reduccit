class FixPostColumnNames < ActiveRecord::Migration
  def change
    rename_column :posts, :target, :url
    rename_column :posts, :content, :body
    remove_column :posts, :location
  end
end
