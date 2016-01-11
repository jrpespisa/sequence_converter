require 'spec_helper'

describe Rna, ".new" do
  it "is takes a dna_seq as an argument" do
    rna = Rna.new("CCGGTTAAA")

    expect(rna.dna_seq).to eq("CCGGTTAAA")
  end
end

describe "#transcribe" do
  it "transcribes the DNA sequence into RNA sequence" do
    rna = Rna.new("ccggttaaa")
    rna.transcribe

    expect(rna.rna_seq).to eq("GGCCAAUUU")
  end
end
