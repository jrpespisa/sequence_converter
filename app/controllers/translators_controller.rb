require 'pry'

class TranslatorsController < ApplicationController

  def index
  end

  def create
    if params["dna_seq"].size < 3
      flash[:notice] = "Please make sure the sequence is at least 3 characters long."
      redirect_to "/"
    elsif params["dna_seq"]
      @translator = Translator.new(params["dna_seq"])
      render :index
    end
  end
end
