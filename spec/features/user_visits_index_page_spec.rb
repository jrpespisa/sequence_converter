require 'rails_helper'

feature "biologist visits index page" do
  scenario "biologist sees the dna conversion form" do
    visit "/"

    expect(page).to have_content "Sequence Converter"
    expect(page).to have_content "DNA Sequence:"
  end

  scenario "biologist inputs dna sequence and an rna and protein string are returned" do
    visit "/"
    fill_in "dna_seq", with: "acacac"
    click_on "Generate"

    expect(page).to have_content "RNA Sequence:"
    expect(page).to have_content "Protein Sequence:"
    expect(page).to have_content "UGUGUG"
    expect(page).to have_content "C V"
  end
  scenario "biologist inputs dna sequence that is fewer than 3 characters in length" do
    visit "/"
    fill_in "dna_seq", with: "cc"
    click_on "Generate"

    expect(page).to have_content "Please make sure the sequence is at least 3 characters long."
    expect(page).to_not have_content "GG"
  end
end
