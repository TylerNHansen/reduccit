module ApplicationHelper
  # tabled until OAUTH stuff
  # # Class for interacting with reddit's APIs.
  # class Reddit
  #   include HTTParty
  #   format :json
  #   APP_NAME = "u/ThrustVectoring's test app please ignore"
  #   # token is manually gotten through sending a query to:
  #   # https://ssl.reddit.com/api/v1/authorize?client_id=NmBDuG3c71tNbQ&response_type=code&state=dsfargeg&redirect_uri=http://127.0.0.1:3000/&duration=temporary&scope=read
  #
  #   # state=dsfargeg&code=GpYcOucbDBfM-GUaf7B8tzFfvnQ
  #   CODE = 'GpYcOucbDBfM-GUaf7B8tzFfvnQ'
  #   STATE = 'dsfargeg'
  #   REDIRECT_URI = 'http://127.0.0.1:3000/'
  #   def initialize
  #     @code = CODE # MANUALLY INSERT THIS
  #     @headers = {"user-agent" => APP_NAME}
  #   end
  #
  #   def getToken
  #     body = {
  #       :grant_type => "authorization_code",
  #       :code => CODE,
  #       :redirect_uri => REDIRECT_URI,
  #     }
  #     HTTParty.post('https://ssl.reddit.com/api/v1/access_token',
  #     :body => body,
  #     :headers => @headers,
  #     )
  #   end
  # end
  #
  # def getReddit
  #   Reddit.new
  # end




end

