# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  url        :string(255)
#  body       :text
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#  title      :string(255)
#

class Post < ActiveRecord::Base
  belongs_to :user
  before_create :add_http

  private

  def add_http
    /^(?!http:\/\/)./.match(self.url) do
      self.url = "http://#{self.url}"
    end
  end

end
