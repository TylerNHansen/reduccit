class TestController < ApplicationController


  def test
    # use HTTParty to grab the json from a sample reddit path
    # then send render that as JSON as send it to the client
    # entire point of this controller/route is for quick-and-dirty
    # JSON stuff in reddit's format for the front-end to handle

    raw_result = HTTParty.get('http://www.reddit.com/r/anonyreddit/.json')
    results = raw_result['data']['children'].map do |entry|
      entry['data'].slice('url', 'name', 'title')
    end
    render json: results
  end

  private

  def parse_post

  end


end


class Reddit
  include HTTParty
  format :json
  base_uri 'https://ssl.reddit.com'
  PW = ENV['REDDIT_PASSWORD']
  USER = ENV['REDDIT_USER_NAME']

  attr_reader :cookie

  def self.login
    resp = post('/api/login', {
      :headers => {
        "User-Agent" => "ThrustVectoring's Test Script"
      },
      :body => {
        user: USER,
        passwd: PW,
        api_type: 'json'
      }})
      # resp.headers["set-cookie"]
      # yields the cookie for sending logged-in requests
  end

end