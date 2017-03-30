class MessagesController < ApplicationController

  def index
    @messages = []

    respond_to do |format|
      format.json { render :json => @messages , :status => 200 }
    end

  end


end
