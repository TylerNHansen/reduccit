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

require 'spec_helper'

describe Post do
  pending "add some examples to (or delete) #{__FILE__}"
end
