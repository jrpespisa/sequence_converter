require 'rails_helper'

feature "biologist can reset input field" do
  scenario "biologist sees 'Submit' button read as 'Reset' after submitting data", js: true do
    visit "/"
    fill_in "dna_seq", with: "aaccttgg"
    click_on "Submit"

    expect(page).to have_content "Reset"
  end

  scenario "'Reset' button does not appear if invalid data is entered", js: true do
    visit "/"
    fill_in "dna_seq", with: "a"
    click_on "Submit"

    expect(page).to_not have_content "Reset"
  end

  scenario "biologist can reset data", js: true do
    visit "/"
    fill_in "dna_seq", with: "aaccttgg"
    click_on "Submit"
    click_on "Reset"

    expect(page).to have_content "Submit"
    expect(page).to_not have_content "DNA breakdown:"
    expect(page).to_not have_content "RNA Sequence:"
    expect(page).to_not have_content "Amino Acid Sequence:"
  end
end
