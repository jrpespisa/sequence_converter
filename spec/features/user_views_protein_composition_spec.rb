require 'rails_helper'

feature %w(biologist can view the percentage of different
amino acid groups generated from the input sequence) do
  scenario "biologist generates additional amino acid data" do
    visit "/"
    fill_in "dna_seq", with: "cacaca"

    expect(page).to have_content "Valine"
    expect(page).to have_content "Cysteine"
  end
end
