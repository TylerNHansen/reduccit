class RedditController < ApplicationController


  def create
    url = params['url']
    title = params['title']
    subreddit = params['subreddit']
    client = RedditKit::Client.new(Figaro.env.REDDIT_USER_NAME, Figaro.env.REDDIT_PASSWORD)
    response = client.submit(title, subreddit, url: url)

    render text: response
  end


end


# client = RedditKit::Client.new(Figaro.env.REDDIT_USER_NAME, Figaro.env.REDDIT_PASSWORD)

# client.signed_in?

# client.submit('title text', 'subreddit name', url: 'http://submission url')