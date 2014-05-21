# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  token           :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base

  # ensure all users are created with a client-side token
  before_create do
    self.token = User.new_token
  end


  def self.find_or_create(token)
    return User.create unless token
    User.find_by_token(token)
  end

  def token!
    self.token
  end

  def to_s
    self.id.to_s
  end

  private

  def self.new_token
    SecureRandom.hex
  end
end
