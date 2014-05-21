class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :token
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :users, :token
    add_index :users, :email
    add_index :users, :password_digest
  end
end
