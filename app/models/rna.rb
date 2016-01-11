class Rna
  attr_reader :dna_seq, :rna_seq

  def initialize(dna_seq = nil)
    @dna_seq = dna_seq
  end

  def transcribe
    @rna_seq = @dna_seq.upcase!.tr("TAGC", "AUCG")
  end
end
