class MessagesController < ApplicationController

  def index
    messages = [
      {
        :id => 1,
        :message => "Hello from Angular"
      },
      {
        :id => 2,
        :message => "I already said hello..."
      }
    ]

    respond_to do |format|
      format.json { render :json => messages, :status => 201 }
    end
  end
end
