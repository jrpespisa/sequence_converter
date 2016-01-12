require 'pry'

class TranslatorsController < ApplicationController

  def index
  end

  def create
    unless params["dna_seq"].nil?
      @translator = Translator.new(params["dna_seq"])
      render :index
    end
  end
end
