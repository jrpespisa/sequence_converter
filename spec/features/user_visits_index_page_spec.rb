require 'rails_helper'

feature "biologist visits index page" do
  scenario "biologist sees the dna conversion form" do
    visit "/"

    expect(page).to have_content "Sequence Converter"
    expect(page).to have_content "DNA Sequence:"
  end

  scenario "biologist inputs dna sequence that contains invalid nucleotides", js: true do
    visit "/"
    fill_in "dna_seq", with: "acacacfft"
    click_on "Submit"

    expect(page).to have_content "uguguga"
    expect(page).to have_content "CV"
  end

  scenario "biologist inputs dna sequence and an rna and protein string are returned", js: true do
    visit "/"
    fill_in "dna_seq", with: "acacac"
    click_on "Submit"

    expect(page).to have_content "RNA Sequence:"
    expect(page).to have_content "Amino Acid Sequence:"
    expect(page).to have_content "ugugug"
    expect(page).to have_content "CV"
  end

  scenario "biologist inputs dna sequence that is fewer than 3 characters in length", js: true do
    visit "/"
    fill_in "dna_seq", with: "cc"
    click_on "Submit"

    expect(page).to have_content "DNA sequence is too short. It must be 3 characters or greater."
    expect(page).to_not have_content "gg"
  end

  scenario "inputs are not case-sensitive", js: true do
    visit "/"
    fill_in "dna_seq", with: "ACAcac"
    click_on "Submit"

    expect(page).to have_content "RNA Sequence:"
    expect(page).to have_content "Amino Acid Sequence:"
    expect(page).to have_content "ugugug"
    expect(page).to have_content "CV"
  end

  scenario "biologist enters nothing into the form and clicks 'submit'", js: true do
    visit "/"
    click_on "Submit"

    expect(page).to_not have_content "RNA Sequence:"
    expect(page).to_not have_content "Amino Acid Sequence:"
  end
end
