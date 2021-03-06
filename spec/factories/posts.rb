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

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :post do
    target "MyString"
    location "MyString"
    content "MyText"
    user nil
  end
end
