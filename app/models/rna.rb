class Rna
  attr_reader :dna_seq, :rna_seq

  def initialize(dna_seq = nil)
    @dna_seq = dna_seq
  end

  def transcribe
    @dna_seq.delete!("^acgtACGT")
    @rna_seq = @dna_seq.tr("tagcTAGC", "AUCGAUCG")
  end
end
