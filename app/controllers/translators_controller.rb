require 'pry'

class TranslatorsController < ApplicationController

  def index
  end

  def create
    # if params["inputSeq"].size < 3
    #   flash[:notice] = "Please make sure the sequence is at least 3 characters long."
    #   redirect_to "/"
    # elsif params["inputSeq"]
    #   @translator = Translator.new(params["inputSeq"])
    #   render :index
    # end
  end
end
