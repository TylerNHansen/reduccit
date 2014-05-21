# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  target     :string(255)
#  location   :string(255)
#  content    :text
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#  title      :string(255)
#

require 'spec_helper'

describe Post do
  pending "add some examples to (or delete) #{__FILE__}"
end
