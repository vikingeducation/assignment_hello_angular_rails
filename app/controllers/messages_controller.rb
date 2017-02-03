class MessagesController < ApplicationController

  def index
    render json: @messages = [
                              { :id => 1, :message => 'Hello Angular World!'},
                              {:id => 2, :message => 'I already said hello...'}
                              ]
  end
end
