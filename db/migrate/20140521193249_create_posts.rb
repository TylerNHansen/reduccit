class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :target
      t.string :location
      t.text :content
      t.references :user, index: true

      t.timestamps
    end
    add_index :posts, :location, unique: true
  end
end
