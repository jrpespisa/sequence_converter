require 'pry'

class TranslatorsController < ApplicationController

  def index
  end

  def create
    unless params["dna_seq"].nil?
      if params["dna_seq"].include?("^actg")

      else
        @translator = Translator.new(params["dna_seq"])
        render :index
      end
    end
  end
end
